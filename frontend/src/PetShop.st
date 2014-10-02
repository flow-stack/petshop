Smalltalk createPackage: 'PetShop'!
Model subclass: #Catalog
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #CatalogController
	instanceVariableNames: ''
	package: 'PetShop'!

!CatalogController methodsFor: 'reactions'!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.
	
	'#loaderBar'asJQuery remove.
! !

Model subclass: #Footer
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #FooterController
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #PetShopController
	instanceVariableNames: 'session'
	package: 'PetShop'!
!PetShopController commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!PetShopController methodsFor: 'accessing'!

session

	^ session
! !

!PetShopController methodsFor: 'reactions'!

onOpen
	"All is loaded, ready to pet!!"
	
	"Time for the app to do its own particular thigns..."
	
	"do this
	and
	that..
	
	also this"

	self model: self class defaultModel.

	"Make the router be sensible to URI changes"
	Router observeHash.

	"Let's have a sesion"
	session := Session new.

	"Handy reference"
	window at: 'app' put: self.
	
	"Publish some local objects to be reached from server"
	self session api ws
		publish: window app at: 'app';
		publish: Transcript current at: 'Transcript';
		publish: console at: 'console';
		publish: [ :sent | sent ] at: 'echo';
		publish: [ :ping | #pong ] at: 'ping';		
		publish: [ :a :b | a + b ] at: 'sum';	
		yourself
!

onTemplate: data
	"Receives the template's data after requirejs 
	have received it from the server (or cache)."

	super onTemplate: data.
	
	"Lets make sure we load the catalog using the #catalog div as its root
	and refresh if already there"
	'#loaderBar'asJQuery show.
	(self controllersAt: 'catalog' ifAbsentPut:[ 
		CatalogController for: Catalog new on: self appendingTo: '#catalog' asJQuery ]) refesh.

	(self controllersAt: 'footer' ifAbsentPut:[ 
		FooterController for: Footer new on: self appendingTo: '#footer' asJQuery ]) refesh.
! !

!PetShopController class methodsFor: 'actions'!

defaultModel
	"Answers the default model for this controller."
	
	| shopVisitor |

	"The strategy is to have as model something that fits for a shop visitor
	and customizes somewhow to her / his visiting experience.
	If is not the first time we might have it stored locally at 'me''
	and if not, we fallback to a default new model"
	shopVisitor := 	ShopVisitor localFindId: 'me'.
	
	^ shopVisitor isNil
		ifTrue:[ ShopVisitor new ]
		ifFalse:[ shopVisitor ]
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

BindingController subclass: #ProductController
	instanceVariableNames: ''
	package: 'PetShop'!

BindingController subclass: #ProductThumbnailController
	instanceVariableNames: ''
	package: 'PetShop'!

Model subclass: #ShopVisitor
	instanceVariableNames: ''
	package: 'PetShop'!

