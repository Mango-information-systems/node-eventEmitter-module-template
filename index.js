var sys = require('sys')
	, fs = require('fs')
	, events = require('events')

function moduleName(vendor, sentParams) {

	this.vendor = vendor
	initialParams = sentParams;

	if(false === (this instanceof moduleName)) {
		return new moduleName()
	}

	events.EventEmitter.call(this)
}

sys.inherits(moduleName, events.EventEmitter)

moduleName.prototype.functionName = function(opts) {
	var self = this

/*
	self.vendor.action(opts, function(err, res) {
		
		self.emit('eventTitle', 'dataHEre')
		
	})
*/
	self.emit('eventTitle', 'dataHEre')
	
}

exports.moduleName = moduleName
