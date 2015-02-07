reactions
onBeforeSave

	super onBeforeSave.
	
	self hasProducts ifTrue: [  
		self products do: [ :e |  e save ] ]