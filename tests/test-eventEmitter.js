var ModuleName = require('../index')
	, moduleName = new ModuleName.moduleName( null, {} )

moduleName.on('eventTitle', function(msg) {
	console.log('eventTitle', msg)
})

moduleName.functionName( {"message": "123"} )
