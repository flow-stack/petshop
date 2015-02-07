actions
saveThings
	
	FWRESTAPIv10Command databaseDo: [
		self getProducts do: [ :product | product insert ] ].
	