try {
	// 12-29-2024
	// Changes for Node/Electron cross-compatibility.
	var isElectron = false;
	isElectron = require('electron');
	isElectron = isElectron ? isElectron.shell : false;
} catch(err) {
	isElectron = false;
}

FACTORY.Register('Env', function envFactory() {
	var _Env = function () {
		var self = this;
		var folder, ipc, shell, os;
		var envPaths;
		var win = window || {};
		var glob = globals || {};
	  
		var $config;		// This will be set by Config.factory.js
		var _state = '';	// This will be set by Config.factory.js

		if (isElectron) {
			ipc = require('electron').ipcRenderer;
			shell = require('electron').shell;
			os = require('os');
		}

		function getPath(fldr) {
			return folder + '/' + fldr;
		}
		function getAppPath() {
			return folder;
		}
		
		envPaths = {};
		if (isElectron) {
			if (!glob.mockFS) {
				['base', 'nimblev5', 'exe', 'temp', 'videos', 'pictures', 'music', 'appData', 'userData', 'documents', 'downloads'].forEach(function(itm) {
					envPaths[itm] = (itm == 'base') ? ipc.sendSync('path', itm) : 
						(itm == 'nimblev5') ? getPath(itm) : ipc.sendSync('path', itm);
					envPaths[itm] += (itm != 'exe') ? '/' : '';
				});
			}
			self.getPath = function(name) {
				if (glob.mockFS) { return ''; }

				return envPaths[name];
			};
			self.isWin = win.os ? os.platform() == 'win32' : 'win32';
		} else {
			if (FACTORY.node) {
				folder = '../Build.node/build-server';
				
				var app = { 
					getAppPath: getAppPath,
					getPath: getPath
				};

				self.getPath = function(name) {
					if (glob.mockFS) { return ''; }

					return app.getPath(name);
				};
				
				['base', 'nimblev5', 'exe', 'temp', 'videos', 'pictures', 'music', 'appData', 'userData', 'documents', 'downloads'].forEach(function(itm) {
					envPaths[itm] = (itm == 'base') ? app.getAppPath() : 
						(itm == 'nimblev5') ? getPath(itm) : app.getPath(itm);
					envPaths[itm] += (itm != 'exe') ? '/' : '';
				});
			}
			self.isWin = false;
		}
		self.config = function(cfg) {
		  if (cfg) {
			$config = cfg;
		  } else {
			return $config;
		  }
		};
		self.state = function(st) {
		  if (st) {
			_state = st;
		  } else {
			return _state;
		  }
		};
		self.envPaths = function() {
			return JSON.parse(JSON.stringify(envPaths));
		};
	  
		self.beta_server = '';	 // This will be set by Config.factory.js
		self.isElectron = !!(isElectron);

      	self.notSecure = function() { return (_state == 'local' || window.location.href.indexOf('127.0.0.1') > -1); };
		self.server = function(svc) {
		  return $config.server(svc);
		};
		self.domain = function() {
		  return $config.domain();
		};
		self.host = function() {
			var ret = self.domain();
			return (ret.indexOf('www.') > -1) ? ret.split('www.')[1] : 
				(ret.indexOf('://') > -1) ? ret.split('/')[2] : ret;
		};

		self.getShell = function() {
			return shell;
		};

		
		if (isElectron) {
			self.cmDialog = function(cfg, cbk) {
				if (glob.mockFS) { if (cbk) { cbk(''); } }
				
				var ref = ipc.on('dlg-data', function(event, result) {
					if (result) {
						result = JSON.parse(result);
					}
					ref.removeAllListeners('dlg-data');
					if (cbk) { cbk(result); }
				});
				
				ipc.send('dlg-msg', JSON.stringify(cfg));
			};
		} else {
			self.cmDialog = function(cfg, cbk) {};
		}
		self.unload = function() {
			FACTORY.UnRegister('Env');
		};
	};

	_Env.prototype.type = function () {
		return "Env";
	};
	_Env.prototype.toDto = function () {
		return { };
	};
	return _Env;
});

if (FACTORY.node) { 
	module.exports = FACTORY.New('Env');
} else {
	Env = FACTORY.New('Env');
	if (typeof(_Config) != "undefined") {
		_Config.update();
	}
}