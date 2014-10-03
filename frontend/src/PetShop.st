Smalltalk createPackage: 'PetShop'!
Model subclass: #Cart
	instanceVariableNames: ''
	package: 'PetShop'!

!Cart methodsFor: 'accessing'!

products

	super products ifNil:[
		self products: OrderedCollection new ].
		
	^ super products
! !

!Cart methodsFor: 'actions'!

addProduct: aProduct

	^ self products add: aProduct
!

removeProduct: aProduct

	^ self products remove: aProduct ifAbsent:[ nil ]
! !

BindingController subclass: #CartController
	instanceVariableNames: ''
	package: 'PetShop'!

!CartController methodsFor: 'reactions'!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.

	'#loaderBar'asJQuery remove.
		
	(self ifAbsentAt: 'products' put: [
		"Lazy creation of the list controller for the thumbnails"
		(ListController 
			for: model 
			on: self 
			appendingTo: '.products' asJQuery)
				getItemsBlock: [:m| m products ];
				itemControllerClass: ProductInCartController;
				yourself]) refresh "be sure to display resh stuff"
! !

!CartController class methodsFor: 'actions'!

defaultModel
	"Answers the default model for this controller."
	
	^ Flow session shopVisitor cart
! !

Model subclass: #Catalog
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #CatalogController
	instanceVariableNames: ''
	package: 'PetShop'!
!CatalogController commentStamp!
The `CatalogController` has the model with the list of `products`. It also has a `ListController` that is going to present and maintain a thumbnail for each product.

This controller uses the timely `onTemplate:` reaction to load Products from the backend and, once the answer arrives, react again in `onProducts:` to lazily create the list controller of those fresh products!

!CatalogController methodsFor: 'reactions'!

onProducts: someProducts

	'#loaderBar'asJQuery remove.
	
	model products: someProducts.
	
	(self ifAbsentAt: 'products' put: [
		"Lazy creation of the list controller for the thumbnails"
		(ListController 
			for: model 
			on: self 
			appendingTo: '.products' asJQuery)
				getItemsBlock: [:m| m products ];
				itemControllerClass: ProductThumbnailController;
				yourself]) refresh "be sure to display resh stuff"
!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.

	Product findAllDo: [ :res | 
		self onProducts: (Product onAfterReadAll: res) ].
! !

Model subclass: #Footer
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #FooterController
	instanceVariableNames: ''
	package: 'PetShop'!

Object subclass: #PetShop
	instanceVariableNames: ''
	package: 'PetShop'!

!PetShop class methodsFor: 'accessing'!

shopVisitor

	| shopVisitor |

	"The strategy is to have something to model a shop visitor
	so the controllers can use it and customize somewhow her / his visiting experience.
	If is not a first timer we will have it stored locally at 'me''
	and if not, we fallback to a default new model"
	shopVisitor := 	ShopVisitor localFindId: 'me'.
	
	^ shopVisitor isNil
		ifTrue:[ ShopVisitor new
					id: 'me';
					cart: Cart new;
					wishList: WishList new;
					yourself ]
		ifFalse:[ shopVisitor ]
! !

!PetShop class methodsFor: 'actions'!

publishObjects
	"Publish some local objects to be reached from backend"
	
	Flow session api ws
		publish: window flow app at: 'app';
		publish: Transcript current at: 'Transcript';
		publish: console at: 'console';
		publish: [ :sent | sent ] at: 'echo';
		publish: [ :ping | #pong ] at: 'ping';		
		publish: [ :a :b | a + b ] at: 'sum';	
		yourself
!

start
	"Starts the PetShop app"
	
	Flow app: self; start.
	
	self publishObjects.
	
	Flow session shopVisitor: self shopVisitor.
	
	Router refresh
! !

BindingController subclass: #PetShopController
	instanceVariableNames: 'session'
	package: 'PetShop'!
!PetShopController commentStamp!
The `PetShopController` is the main controller in this PetShop sample application.

As you can see in class side `isValidFor: anURI`, it's going to be routed when the `URI` is at `/`.

It uses the default model, which is `aShopVisitor`, either loaded from localStorage using MiniMapless or, lazily, creating a brand new one.

If you take a look into `onOpen` you'll see that:

- sets the model
- activates the Router
- creates a session
- puts the instance in window.app (so you can reach it from the console)
- and publishes some objects to be remotely reached by the backend!

!PetShopController methodsFor: 'accessing'!

session

	^ session
! !

!PetShopController methodsFor: 'actions'!

find

	window alert: 'Implement find please!!'
!

saveState

	self model cart save.
	self model save.
! !

!PetShopController methodsFor: 'initialization'!

initialize

	super initialize.
! !

!PetShopController methodsFor: 'reactions'!

onAfterModel

	super onAfterModel.
	
	self model updateCartSize.
	self model updateWishListSize.
!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.

	"Lets make sure we load the catalog using the #catalog div as its root
	and refresh if already there"
	'#loaderBar'asJQuery show.
	(self controllerAt: 'catalog' ifAbsentPut:[ 
		CatalogController for: Catalog new on: self appendingTo: '#catalog' asJQuery ]) refresh.

	(self controllerAt: 'footer' ifAbsentPut:[ 
		FooterController for: Footer new on: self appendingTo: '#footer' asJQuery ]) refresh.
! !

!PetShopController class methodsFor: 'actions'!

defaultModel
	"Answers the default model for this controller."
	
	^ Flow session shopVisitor
!

open
	"The foundation is ready, time to start this app!!"

	^ (self for: nil on: nil appendingTo: '#content' asJQuery) onOpen
! !

!PetShopController class methodsFor: 'testing'!

isValidFor: anURI
	"Answers true if this controller is the right route for anURI"
	
	"This is the home, so should answer true to anything that looks like it."
	^ self isAbstract not and:[
	anURI isEmpty or:[
	anURI = '/' or:[
	anURI = '/#/' ] ] ]
! !

Model subclass: #Product
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #ProductController
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #ProductInCartController
	instanceVariableNames: ''
	package: 'PetShop'!

!ProductInCartController methodsFor: 'actions'!

removeFromCart

	Flow session shopVisitor localSave.
	model localSave.
	
	Flow session shopVisitor cart removeProduct: model; localSave.
	Flow session shopVisitor updateCartSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-warning" role="alert">We''ve removed one ',model description,' from your cart</div>'.

	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.

	self trigger: #removeFromCart: with: model
! !

BindingController subclass: #ProductInWishListController
	instanceVariableNames: ''
	package: 'PetShop'!

!ProductInWishListController methodsFor: 'actions'!

removeFromCart

	Flow session shopVisitor localSave.
	model localSave.
	
	Flow session shopVisitor wishList removeProduct: model; localSave.
	Flow session shopVisitor updateWishListSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-warning" role="alert">We''ve removed one ',model description,' from your wish list</div>'.

	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.

	self trigger: #removeFromWishList: with: model
! !

BindingController subclass: #ProductThumbnailController
	instanceVariableNames: ''
	package: 'PetShop'!

!ProductThumbnailController methodsFor: 'actions'!

addToCart

	Flow session shopVisitor localSave.
	model localSave.
	
	Flow session shopVisitor cart addProduct: model; localSave.
	Flow session shopVisitor updateCartSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-success" role="alert">Done. We''ve added one ',model description,' to your cart!!</div>'.
	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.
	
	self trigger: #addToCart: with: model
!

addToWishList

	Flow session shopVisitor localSave.
	model localSave.
	
	Flow session shopVisitor wishList addProduct: model; localSave.
	Flow session shopVisitor updateWishListSize.
	
	'#alertsRoot' asJQuery html: '<div class="alert alert-info" role="alert">We''ve added one ',model description,' to your wishlist. It got sooo whishable!!</div>'.

	['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.

	self trigger: #addToWishList: with: model
! !

!ProductThumbnailController methodsFor: 'reactions'!

onAfterModel

	super onAfterModel.
	
	self model imageUrl: 'img/products/', self model image
! !

Model subclass: #ShopVisitor
	instanceVariableNames: ''
	package: 'PetShop'!

!ShopVisitor methodsFor: 'actions'!

updateCartSize

	self cartSize: self cart products size
!

updateWishListSize

	self wishListSize: self wishList products size
! !

!ShopVisitor methodsFor: 'initialization'!

initialize

	super initialize.
	
	self searchText: ''.
! !

Model subclass: #WishList
	instanceVariableNames: ''
	package: 'PetShop'!

!WishList methodsFor: 'accessing'!

products

	super products ifNil:[
		self products: OrderedCollection new ].
		
	^ super products
! !

!WishList methodsFor: 'actions'!

addProduct: aProduct

	^ self products add: aProduct
!

removeProduct: aProduct

	^ self products remove: aProduct ifAbsent:[ nil ]
! !

