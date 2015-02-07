Smalltalk createPackage: 'App'!
Object subclass: #App
	instanceVariableNames: ''
	package: 'App'!

App class instanceVariableNames: 'main session announcer'!

!App class methodsFor: 'accessing'!

announcer

	^ announcer ifNil: [ announcer := Announcer new ]
!

main

	^ main ifNil: [ self initializeMain ]
!

session

	^ session
!

session: aSession

	session := aSession
! !

!App class methodsFor: 'actions'!

announce: anAnnouncement

	^ self announcer announce: anAnnouncement
!

getSession

	^ ShopSession new
		visitor:  self getVisitor;
		yourself
!

getVisitor

	| shopVisitor |

	"The strategy is to have something to model a shop visitor
	so the controllers can use it and customize somewhow her / his visiting experience.
	If is not a first timer we will have it stored locally at 'me''
	and if not, we fallback to a default new model"
	shopVisitor := ShopVisitor localFindCid: (window localStorage getItem: 'visitor').
	
	^ shopVisitor isNil
		ifTrue:[ ShopVisitor new
					cart: Cart new;
					wishlist: Wishlist new;
					yourself ]
		ifFalse:[ shopVisitor ]
!

on: anAnnouncement do: aReactionBlock

	^ self announcer on: anAnnouncement do: aReactionBlock
!

saveVisitor

	"Saves the visitor in the localStorage and the backend"
	window localStorage setItem: 'visitor' put: App session visitor cid.
	App session visitor localSave
!

setupRouter

	Router rlite
		add: '' do: [ :r | Router set: '#/home' ];
		add: '#' do: [ :r | Router set: '#/home' ];
		add: '#/' do: [ :r | Router set: '#/home' ];
		add: '/' do: [ :r | Router set: '#/home' ];
		
		add: 'home' do: [ :r | App main reset ];

		add: 'cart' do: [ :r | App main showCart ];
		add: 'catalog' do: [ :r | App main showCatalog ];
		
		add: 'product/:id' do: [ :r | Router set: '#/products/',r params id,'/view' ];	
		add: 'product/:id/view' do: [ :r | App main showProductId: r params id ];	

		add: 'search/:target' do: [ :r | App main showSearchResultsFor: r params target ];
		
		yourself
!

start
	"Starts the App app"

	Flow app: self; start.
	window at: #app put: self.
	
	session := self getSession.
	self saveVisitor.

	self main show done: [ Router processHash ].
!

unsubscribe: aReceiver

	^ self announcer unsubscribe: aReceiver
! !

!App class methodsFor: 'initialization'!

initialize

	super initialize.
	
	self setupRouter
!

initializeMain

	^ main := MainController 
					in: nil
					appendingTo: '#main-wrapper' asJQuery
! !

Object subclass: #AppAnnouncements
	instanceVariableNames: 'subject'
	package: 'App'!

!AppAnnouncements methodsFor: 'accessing'!

subject

	^ subject
!

subject: anObject

	subject := anObject
! !

!AppAnnouncements class methodsFor: 'actions'!

on: anObject

	^ self new
		subject: anObject;
		yourself
! !

AppAnnouncements subclass: #AddToCart
	instanceVariableNames: ''
	package: 'App'!

AppAnnouncements subclass: #AddToWishlist
	instanceVariableNames: ''
	package: 'App'!

AppAnnouncements subclass: #RemoveFromCart
	instanceVariableNames: ''
	package: 'App'!

AppAnnouncements subclass: #RemoveFromWishlist
	instanceVariableNames: ''
	package: 'App'!

Model subclass: #Cart
	instanceVariableNames: ''
	package: 'App'!

!Cart methodsFor: 'accessing'!

products

	super products ifNil: [
		self products: OrderedCollection new ].
		
	^ super products
! !

!Cart methodsFor: 'actions'!

addProduct: aProduct

	(self products includes: aProduct) ifFalse: [
		self products add: aProduct ].

	self triggerEvent: #added: with: aProduct.
	
	self updateTotal.
!

removeProduct: aProduct

	self products
		remove: aProduct
		ifAbsent: [ nil ].

	self triggerEvent: #removed: with: aProduct. 
	
	self updateTotal
!

updateTotal

	self total: (self products inject: 0 into: [ :sum :e | sum + e price ])
! !

BindingController subclass: #CartController
	instanceVariableNames: ''
	package: 'App'!

!CartController methodsFor: 'actions'!

observeEvents

	super observeEvents.
	
	self when: #onAfterModel do: [ self model updateTotal ].
	
	App session shopVisitor cart 
		when: #removed: 
		do:[ :evt :product | self onRemoved: product ].
!

update
	
	self model updateTotal
! !

!CartController methodsFor: 'reactions'!

onAfterModel

	super onAfterModel.
	
	self model updateTotal
!

onRemoved: aProduct

	(self controllerAt: 'products') refresh
!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.

	'#loaderBar'asJQuery remove.
		
	(self ifAbsentAt: 'products' 
		put: [
			"Lazy creation of the list controller for the thumbnails"
			(ListController 
				for: model 
				on: self 
				appendingTo: '.products' asJQuery)
					getItemsBlock: [:m| m products ];
					itemControllerClass: ProductInCartController;
					yourself]
		andDo:[ :lc | self observeProducts ]) refresh "be sure to display resh stuff"
! !

!CartController class methodsFor: 'actions'!

defaultModel
	"Answers the default model for this controller."
	
	^ Flow session shopVisitor cart
! !

Model subclass: #Catalog
	instanceVariableNames: ''
	package: 'App'!

!Catalog methodsFor: 'actions'!

update
	
	self cartSize: '(', App session visitor cartSize asString, ')'.
	self wishlistSize: '(', App session visitor wishlistSize asString, ')'.
! !

!Catalog methodsFor: 'initialization'!

initialize

	super initialize.
	
	self update
! !

BindingController subclass: #CatalogController
	instanceVariableNames: ''
	package: 'App'!
!CatalogController commentStamp!
The `CatalogController` has the model with the list of `products`. It also has a `ListController` that is going to present and maintain a thumbnail for each product.

This controller uses the timely `onTemplate:` reaction to load Products from the backend and, once the answer arrives, react again in `onProducts:` to lazily create the list controller of those fresh products!

!CatalogController methodsFor: 'accessing'!

products

	^ self ifAbsentAt: 'products' put: [
		"Lazy creation of the list controller for the thumbnails"
		(ListController 
			in: self 
			appendingTo: '#products-wrapper' asJQuery)
				itemControllerClass: ProductThumbnailController;
				yourself ]
! !

!CatalogController methodsFor: 'actions'!

show

	^ super show done: [ self showProducts ]
!

showProducts

	Product findAllThen: [ :products | 
		self showProducts: products ].
!

showProducts: someProducts


	self products 
		model: (ListModel on: someProducts);
		show
! !

Model subclass: #Footer
	instanceVariableNames: ''
	package: 'App'!

BindingController subclass: #FooterController
	instanceVariableNames: ''
	package: 'App'!

BindingController subclass: #MainController
	instanceVariableNames: ''
	package: 'App'!
!MainController commentStamp!
The `MainController` is the main controller in this App sample application.

As you can see in class side `isValidFor: anURI`, it's going to be routed when the `URI` is at `/`.

It uses the default model, which is `aShopVisitor`, either loaded from localStorage using MiniMapless or, lazily, creating a brand new one.

If you take a look into `onOpen` you'll see that:

- sets the model
- activates the Router
- creates a session
- puts the instance in window.app (so you can reach it from the console)
- and publishes some objects to be remotely reached by the backend!

!MainController methodsFor: 'accessing'!

catalog

	^ self ifAbsentAt: #catalog put: [
			CatalogController 
				on: Catalog new 
				in: self 
				appendingTo: '#catalog-wrapper' asJQuery ]
!

footer

	^ self ifAbsentAt: #footer put: [ 
			FooterController 
				in: self 
				appendingTo: '#footer-wrapper' asJQuery ]
! !

!MainController methodsFor: 'actions'!

find

	window alert: 'Implement find please!!'
!

observeEvents

	super observeEvents.
	
	App on: AddToCart do: [ :ann | self onProductAdded: ann subject ]
!

reset
	
	self hideAll.
	self showCatalog.
	self showFooter
!

saveState

	App session cart save.
	App session save.
!

showCatalog
	
	self catalog show
!

showFooter
	
	self footer show
!

update

	self model updateCartSize.
	self model updateWishlistSize.
! !

!MainController methodsFor: 'reactions'!

onProductAdded: aProduct

	App session visitor localSave.
	
	App session visitor cart addProduct: aProduct; save.
	App session visitor updateCartSize.

	self catalog model update
! !

Model subclass: #Product
	instanceVariableNames: ''
	package: 'App'!

!Product methodsFor: 'actions'!

updateImageUrl

	self imageUrl: 'img/products/', self image
! !

BindingController subclass: #ProductController
	instanceVariableNames: ''
	package: 'App'!

BindingController subclass: #ProductInCartController
	instanceVariableNames: ''
	package: 'App'!

!ProductInCartController methodsFor: 'actions'!

removeFromCart

	Flow session shopVisitor localSave.
	model localSave.
	
	Flow session shopVisitor cart removeProduct: model; localSave.
	Flow session shopVisitor updateCartSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-warning" role="alert">We''ve removed one ',model description,' from your cart</div>'.

	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.
! !

BindingController subclass: #ProductInWishListController
	instanceVariableNames: ''
	package: 'App'!

!ProductInWishListController methodsFor: 'actions'!

removeFromCart

	App session shopVisitor localSave.
	model localSave.
	
	App session shopVisitor wishlist removeProduct: model; localSave.
	App session shopVisitor updateWishlistSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-warning" role="alert">We''ve removed one ',model description,' from your wish list</div>'.

	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.
! !

BindingController subclass: #ProductThumbnailController
	instanceVariableNames: ''
	package: 'App'!

!ProductThumbnailController methodsFor: 'actions'!

addToCart

	App announce: (AddToCart on: model).
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-success" role="alert">Done. We''ve added one ',model description,' to your cart!!</div>'.
	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.
!

addToWishlist

	App session visitor localSave.
	
	App session visitor wishlist addProduct: model; localSave.
	App session visitor updateWishlistSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-info" role="alert">We''ve added one ',model description,' to your wishlist. It got sooo whishable!!</div>'.

	[ '#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.
! !

!ProductThumbnailController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self when: #onAfterModel do: [ self model updateImageUrl ]
! !

Session subclass: #ShopSession
	instanceVariableNames: ''
	package: 'App'!

Model subclass: #ShopVisitor
	instanceVariableNames: ''
	package: 'App'!

!ShopVisitor methodsFor: 'actions'!

updateCartSize

	self cartSize: self cart products size
!

updateWishlistSize

	self wishlistSize: self wishlist products size
! !

!ShopVisitor methodsFor: 'initialization'!

initialize

	super initialize.
	
	self searchText: ''.
! !

Model subclass: #Wishlist
	instanceVariableNames: ''
	package: 'App'!

!Wishlist methodsFor: 'accessing'!

products

	super products ifNil:[
		self products: OrderedCollection new ].
		
	^ super products
! !

!Wishlist methodsFor: 'actions'!

addProduct: aProduct

	(self products includes: aProduct) ifFalse:[
		self products add: aProduct ].
		
	self trigger: #added: with: aProduct
!

removeProduct: aProduct

	self products 
		remove: aProduct
		ifAbsent:[ nil ].
		
	self trigger: #removed: with: aProduct
! !

