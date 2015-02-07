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
		ifTrue: [ ShopVisitor new ]
		ifFalse: [ shopVisitor ]
!

on: anAnnouncement do: aReactionBlock

	^ self announcer on: anAnnouncement do: aReactionBlock
!

saveVisitor

	"Saves the visitor in the localStorage and the backend"
	window localStorage setItem: 'visitor' put: App session visitor cid.
	App session visitor localSave
!

setupFormatters

	RivetsJS  
		addFormatter: [ :object | 
			object ifNil: [ 0 ] ifNotNil: [ object asNumber ] ] 
		at: #asNumber;
		yourself
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
	
	self setupRouter.
	self setupFormatters
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

orderedProducts

	super orderedProducts ifNil: [
		self orderedProducts: OrderedCollection new ].
		
	^ super orderedProducts
! !

!Cart methodsFor: 'actions'!

addProduct: aProduct
	"Adds aProduct to the cart.
	Each product is added to the cart wrapped into an OrderedProduct
	so it remembers price and quantity at the time of the act of adding."
	
	| ordered |

	ordered := self orderedProducts 
						detect: [ :each | each product = aProduct ]
						ifNone: [ self orderedProducts add: (OrderedProduct on: aProduct) ].

	ordered addOne.
	
	self triggerEvent: #added: with: ordered.
	
	self updateTotal.
!

removeProduct: aProduct
	"Removes aProduct from the cart.
	Each product is removed from the cart subtracting 1 unit of the OrderedProduct wrapper.
	It removes that wrapper if quantity gets to zero."
	
	| ordered |

	ordered := self orderedProducts 
						detect: [ :each | each product = aProduct ]
						ifNone: [ nil ].

	ordered ifNotNil: [
		ordered removeOne.
		ordered quantity isZero ifTrue: [ self orderedProducts remove: ordered ifNone: [ nil ] ]].

 	self triggerEvent: #removed: with: aProduct. 
	
	self updateTotal
!

updateTotal

	self total: (self orderedProducts inject: 0 into: [ :sum :e | sum + e total ])
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

	self cartSize: App session visitor cartSize.
	self wishlistSize: App session visitor wishlistSize.
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
!

update

	model update
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
	
	App on: AddToCart do: [ :ann | self onAddedToCart: ann subject ].
	App on: AddToWishlist do: [ :ann | self onAddedToWishlist: ann subject ].
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

onAddedToCart: aProduct

	App session visitor localSave.
	
	App session visitor cart addProduct: aProduct.
	App session visitor updateCartSize.
	App saveVisitor.

	self catalog update
!

onAddedToWishlist: aProduct

	App session visitor localSave.
	
	App session visitor wishlist addProduct: aProduct.
	App session visitor updateWishlistSize.
	App saveVisitor.

	self catalog update
! !

Model subclass: #OrderedProduct
	instanceVariableNames: ''
	package: 'App'!

!OrderedProduct methodsFor: 'accessing'!

price

	super price ifNil: [
		self price: 0 ].
		
	^ super price
!

quantity

	super quantity ifNil: [
		self quantity: 0 ].
		
	^ super quantity
!

total

	^ self quantity * self price
! !

!OrderedProduct methodsFor: 'actions'!

addOne

	self quantity: self quantity + 1
!

removeOne

	self quantity > 0 ifTrue: [
		self quantity: self quantity - 1 ]
! !

!OrderedProduct class methodsFor: 'actions'!

on: aProduct

	^ self new
		product: aProduct;
		quantity: 0;
		price: aProduct price;
		yourself
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

	App announce: (AddToWishlist on: model).
	
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

update

	self updateCartSize.
	self updateWishlist.
!

updateCartSize

	self cartSize: (self cart orderedProducts inject: 0 into: [ :sum :e | sum + e quantity ])
!

updateWishlistSize

	self wishlistSize: (self wishlist wishedProducts inject: 0 into: [ :sum :e | sum + e quantity ])
! !

!ShopVisitor methodsFor: 'initialization'!

initialize

	super initialize.
	
	self searchText: ''.
	self cart: Cart new.
	self wishlist: Wishlist new.
	self update
! !

Model subclass: #Wishlist
	instanceVariableNames: ''
	package: 'App'!

!Wishlist methodsFor: 'accessing'!

wishedProducts

	super wishedProducts ifNil:[
		self wishedProducts: OrderedCollection new ].
		
	^ super wishedProducts
! !

!Wishlist methodsFor: 'actions'!

addProduct: aProduct
	"Adds aProduct to the cart.
	Each product is added to the cart wrapped into an OrderedProduct
	so it remembers price and quantity at the time of the act of adding."
	
	| ordered |

	ordered := self wishedProducts 
						detect: [ :each | each product = aProduct ]
						ifNone: [ self wishedProducts add: (OrderedProduct on: aProduct) ].

	ordered addOne.
	
	self triggerEvent: #added: with: ordered.
	
	self updateTotal.
!

removeProduct: aProduct
	"Removes aProduct from the wishlist.
	Each product is removed from the wishlist subtracting 1 unit of the OrderedProduct wrapper.
	It removes that wrapper if quantity gets to zero."
	
	| ordered |

	ordered := self wishedProducts 
						detect: [ :each | each product = aProduct ]
						ifNone: [ nil ].

	ordered ifNotNil: [
		ordered removeOne.
		ordered quantity isZero ifTrue: [ self wishedProducts remove: ordered ifNone: [ nil ] ]].

 	self triggerEvent: #removed: with: aProduct. 
	
	self updateTotal
!

updateTotal

	self total: (self wishedProducts inject: 0 into: [ :sum :e | sum + e total ])
! !

