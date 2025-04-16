try {
	// Check for Node/Electron cross-compatibility.
	if (!Env.isElectron) {
		if (typeof(FACTORY) == 'undefined' && typeof(require) != 'undefined') { FACTORY = require('../factory.js'); }
	}
} catch(err) {
	console.log(err);
}
/* CONFIG Component Manager/Factory :
   NOTE: This factory should be deprecated!!!!!!
   
   Use the Env.factory.js file instead.
*/
FACTORY.Register("Config", function blankFactory() {
	var config = function () {
		var self = this;
		var _state = 'local';	//local
        var _ip = '127.0.0.1:3031';

		self.server = function(svc) {
          return (_state == 'local') ? 'http://' + _ip + '/' + svc : 'https://www.nimble-ide.com/' + svc;
		};
      	self.domain = function() {
          return (_state == 'local') ? 'http://' + _ip : 'https://www.nimble-ide.com';
		};
      
		self.update = function() {
			if (typeof(Env) != "undefined") {
			  Env.config(self);
			  Env.state(_state);
			  Env.beta_server = _ip;
			}
		};
		self.update();
	};
	config.prototype.type = function () {
		return "config";
	};
	config.prototype.toDto = function () {
		return { };
	};
	return config;
});

if (FACTORY.node) { 
	module.exports = FACTORY.New('Config');
} else {
	_Config = FACTORY.New('Config');
}
