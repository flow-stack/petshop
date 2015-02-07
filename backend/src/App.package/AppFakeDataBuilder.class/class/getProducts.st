actions
getProducts

	^ [ :source | | products |
		products := OrderedCollection new.
		
		[ source atEnd ] whileFalse: [
			products add: (Product fromJSONString: source nextLine) ].
		products ] value: self rawData readStream