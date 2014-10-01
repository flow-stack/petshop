Smalltalk createPackage: 'PetShop'!
TemplateController subclass: #PetShopController
	instanceVariableNames: ''
	package: 'PetShop'!
!PetShopController commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!PetShopController methodsFor: 'reactions'!

onOpen
	"All is loaded, ready to pet!!"
	
	super onOpen.
	
	"Time for the app to do its own particular thigns..."
	
	"do this
	and
	that..
	
	also this"

	"Publish some local objects to be reached from server"
	self session api ws
		publish: app at: 'app';
		publish: Transcript current at: 'Transcript';
		publish: console at: 'console';
		publish: [ :sent | sent ] at: 'echo';
		publish: [ :ping | #pong ] at: 'ping';		
		publish: [ :a :b | a + b ] at: 'sum';	
		yourself
! !

!PetShopController class methodsFor: 'as yet unclassified'!

isValidFor: anURI
	"Answers true if this controller is the right route for anURI"
	
	^ self isAbstract not and:[
	anURI isEmpty or:[
	anURI = '/' or:[
	anURI = '/#/' ] ] ]
! !

