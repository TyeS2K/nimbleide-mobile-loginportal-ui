/**
 * Generated with nimble-ide v5.1 on 04/20/2025 03:18 pm.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
if (!$heap) { var $heap = { }; }
$heap.login = { };
$heap.login.Code = {
	_callback: null,
	SlideDesktop: function(oldD, newD) {
		var desk = $f.elem('desktop' + newD + '.body');
		if (!desk) return;
		
		function fadeIn() {
		    if (desk.style.opacity < 1) {
		        desk.style.opacity = (Number(desk.style.opacity) + 0.1).toFixed(2);
		        setTimeout( fadeIn, 60 );
		    } else { 
		        desk.style.opacity = 1;
		        $d.setactive(newD);
		        DESKTOP.switching = false;
		    }
		}
		
		DESKTOP.switching = true;
		desk.style.opacity = 0;
		$d.show('desktop'+ newD +'.body');
		$f.setpos('desktop' + newD + '.body', '', 0, 0);
		$f.slideto('desktop' + oldD + '.body', '', 100, 0, -1, -1, 0.25, function(anim) {
			if (anim.pos == 100) {
				$f.slideto('desktop' + oldD + '.body', '', -(1.35 * DESKTOP.width), 0, -1, -1, 0.50, function(anim) {
					if (anim.pos == 100) {
						fadeIn();
					}
				});
			}
		});
	},
	Ini: { 
	 },
	Csv: { 
	 },
	Data: { 
		"black.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>black<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>b50<DQ>: <DQ>#fafafa<DQ>, <CR>' + 
			'		<DQ>b100<DQ>: <DQ>#f5f5f5<DQ>, <CR>' + 
			'		<DQ>b200<DQ>: <DQ>#eeeeee<DQ>, <CR>' + 
			'		<DQ>b300<DQ>: <DQ>#e0e0e0<DQ>, <CR>' + 
			'		<DQ>b400<DQ>: <DQ>#bdbdbd<DQ>, <CR>' + 
			'		<DQ>b500<DQ>: <DQ>#9e9e9e<DQ>, <CR>' + 
			'		<DQ>b600<DQ>: <DQ>#757575<DQ>, <CR>' + 
			'		<DQ>b700<DQ>: <DQ>#616161<DQ>, <CR>' + 
			'		<DQ>b800<DQ>: <DQ>#424242<DQ>, <CR>' + 
			'		<DQ>b900<DQ>: <DQ>#212121<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"bluegray.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>bluegray<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>bg50<DQ>: <DQ>#eceff1<DQ>, <CR>' + 
			'		<DQ>bg100<DQ>: <DQ>#cfd8dc<DQ>, <CR>' + 
			'		<DQ>bg200<DQ>: <DQ>#b0bec5<DQ>, <CR>' + 
			'		<DQ>bg300<DQ>: <DQ>#90a4ae<DQ>, <CR>' + 
			'		<DQ>bg400<DQ>: <DQ>#78909c<DQ>, <CR>' + 
			'		<DQ>bg500<DQ>: <DQ>#607d8b<DQ>, <CR>' + 
			'		<DQ>bg600<DQ>: <DQ>#546e7a<DQ>, <CR>' + 
			'		<DQ>bg700<DQ>: <DQ>#455a64<DQ>, <CR>' + 
			'		<DQ>bg800<DQ>: <DQ>#37474f<DQ>, <CR>' + 
			'		<DQ>bg900<DQ>: <DQ>#263238<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"brown.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>brown<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>br50<DQ>: <DQ>#efebe9<DQ>, <CR>' + 
			'		<DQ>br100<DQ>: <DQ>#d7ccc8<DQ>, <CR>' + 
			'		<DQ>br200<DQ>: <DQ>#bcaaa4<DQ>, <CR>' + 
			'		<DQ>br300<DQ>: <DQ>#a1887f<DQ>, <CR>' + 
			'		<DQ>br400<DQ>: <DQ>#8d6e63<DQ>, <CR>' + 
			'		<DQ>br500<DQ>: <DQ>#795548<DQ>, <CR>' + 
			'		<DQ>br600<DQ>: <DQ>#6d4c41<DQ>, <CR>' + 
			'		<DQ>br700<DQ>: <DQ>#5d4037<DQ>, <CR>' + 
			'		<DQ>br800<DQ>: <DQ>#4e342e<DQ>, <CR>' + 
			'		<DQ>br900<DQ>: <DQ>#3e2723<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"palette.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>light blue<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>color50<DQ>: <DQ>#ffffff<DQ>, <CR>' + 
			'		<DQ>color100<DQ>: <DQ>#b3c6ff<DQ>, <CR>' + 
			'		<DQ>color200<DQ>: <DQ>#a1b1e7<DQ>, <CR>' + 
			'		<DQ>color300<DQ>: <DQ>#8f9dd0<DQ>, <CR>' + 
			'		<DQ>color400<DQ>: <DQ>#7d89b9<DQ>, <CR>' + 
			'		<DQ>color500<DQ>: <DQ>#6c76a2<DQ>, <CR>' + 
			'		<DQ>color600<DQ>: <DQ>#5b638c<DQ>, <CR>' + 
			'		<DQ>color700<DQ>: <DQ>#4b5177<DQ>, <CR>' + 
			'		<DQ>color800<DQ>: <DQ>#3b3f62<DQ>, <CR>' + 
			'		<DQ>color900<DQ>: <DQ>#2b2f4e<DQ>, <CR>' + 
			'		<DQ>colora100<DQ>: <DQ>#1c1f3b<DQ>, <CR>' + 
			'		<DQ>colora200<DQ>: <DQ>#F2B807<DQ>, <CR>' + 
			'		<DQ>colora400<DQ>: <DQ>#F28705<DQ>, <CR>' + 
			'		<DQ>colora700<DQ>: <DQ>#C52104<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		}
	 },
	Lists: { 
	 },
	i18n: { 
	 },
	Vars: { },
	
	Services: function(in_msg) {
			/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("login received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
		
	},
	Components: {
	
	
	},
	RegisterFactories: function() {
	
		
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
		        var _ip = '127.0.0.1';
		        var _port = 3031;
		      
				self.port = function(blSock) {
		          return (_state == 'local') ? 
		            ":" + (blSock ? _port + 1 : _port) :
		          	"";
		        };
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
		/* Login Manager Component Manager/Factory :
		   
		*/
		FACTORY.Register("LoginAPI", function loginFactory() {
			var login = function (config) {
				var self = this;
		      	var _sv, _dlg, _app = '';
		      	var server;
		      
		      	// TODO: Make sure you copy user license and privace statement
		      	// 		to /static/legal folder path.
		      	var _prev = [];
		      	self.context = function(app) {
		          if (url) {
		            _app = app;
		          } else {
		            return _app;
		          }
		        };
		      	self.domain = function(url) {
		          if (url) {
		            server = url;
		          } else {
		            return server;
		          }
		        };
				self.initMethods = function(dlg) {
		          _dlg = dlg;
		          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
		          
		          var url = window.location.href, uiReady = false; 
		          var parmMap = {
		            p: 'post',
		            t: 'wintype',
		            s: 'redir',
		            f: 'fail',
		            l: 'lic',
		            c: 'count',
		            v: 'verify'
		          };
		          if (!window.ajax) {
		            window.ajax = function(type, api, payload, fn) {
		              $ajx.call({
		                type: type,
		                dataType: payload ? 'text' : '',
		                url: server + '/' + (api ? api + '/' : ''),
		                data: payload,
		                headers: {
		                  'content-type': payload ? 'application/json' : 'text/plain;charset=UTF-8',
		                  'accept': '*/*'
		                },
		                success: function(resp) {
		                  var ary;
		                  if (payload && payload.version == 2.0) {
		                    ary = JSON.parse(resp);
		                    if (fn) { fn('ok', ary); }
		                  } else {
		                    ary = resp.split(':');
		                  	if (fn) { fn(ary.shift() || "", ary.join(':') || ""); }
		                  }
		                },
		                error: function(xhr, opt, err) {
		                  AppEvents.msg.init({
		                    title: 'Error: ping',
		                    msg: 'Server Unreachable. Check network configuration.',
		                  }, function(res) {
		                    $f.unload('loginmsg');
		                  });
		                  console.log('Error: "' + api + '" API - ' + xhr.status + ' : ' + err);
		                }
		              });
		            };
		          }
		          $f.max(_dlg);
		          window.win_fetch = function(msg) {
		            if (ipcRenderer) {
		              return ipcRenderer.sendSync('synchronous-message', JSON.stringify(msg));
		            } else {
		                  switch (msg.cmd) {
		                      case 'set':
		                          window[msg.data] = msg.value;
		                          break;
		                      case 'setuser':
		                          window.user = msg.data;
		                          break;
		                      case 'get':
		                          return window[msg.data] || '';
		                      case 'nav':
		                          if (window.wintype == 'iframe' || msg.data.indexOf('file:') > -1) {
		                            window.postMessage(JSON.stringify(msg));
		                          } else { window.location.href = msg.data; }
		                          break;
		                  }
		            }
		          };
		          window.wintype = ''; window.redir = ''; window.post = ''; window.fail = ''; window.lic = ''; window.count = 0;
		          window.authComplete = function(usr, sessid, cbk) {
		            // Add a delay so popup window is dismissed.
		            if (sessid) win_fetch({cmd: 'set', data: 'sessid', value: sessid || ''});
		            setTimeout(function() {
		              var path, url, win;
		              var user = usr, sessdata;
		              function startApp() {
		                var sess = redir.indexOf('?') > -1 ?
		                    '&id=' + win_fetch({cmd: 'get', data: 'token'}) : '?id=' + win_fetch({cmd: 'get', data: 'token'});
		                sess += '&year=' + (new Date()).getFullYear() + '&img=' + user.image;
		                // Create a Mobile pcid, pcos similar to electron.
		                if (redir.indexOf('#app#') > -1) {
		                  if (AppEvents && AppEvents.startSession) {
		                    delete user.token;
		                    window.USER = Object.assign(window.USER, user, {sessid: sessid, pcid: '', pcos: ''});
		                    if (USER.sessid && !USER.acct) {
		                      _sv = _secureacct(_sv);
		                    }
		                    sessdata = win_fetch({cmd: 'get', data: 'sessid'});
		                    
		                    // CleanUP:
		                    delete window.user;
		                    delete window.ajax;
		                    delete window.wintype;
		                    // delete window.win_fetch;
		                    delete window.authComplete;
		                    AppEvents.startSession(sessdata);
		                  }
		                } else if (redir.indexOf('file:///') > -1) {
		                  win_fetch({cmd: 'nav', data: win_fetch({cmd: 'get', data: 'redir'}) + sess});
		                } else if (redir.indexOf('file:') > -1) {
		                  win_fetch({cmd: 'nav', data: 'file:///' + win_fetch({cmd: 'get', data: 'path'}) + '/' + redir.split(':')[1] + sess});
		                } else {
		                  redir += sess;
		                  win_fetch({cmd: 'nav', data: 'https://' + window.domain + '/' + redir});
		                }
		                
		                if (cbk) cbk();
		              }
		              
					  function verifyLogin() {
						  var payload = {
							  version: 2.0,
							  token: user.token
						  };
						  if (win_fetch({cmd: 'get', data: 'verify'})) {
							  ajax('POST', win_fetch({cmd: 'get', data: 'verify'}), payload, function(hStatus, msg) {
								  if (hStatus == 'ok') {
									 win_fetch({cmd: 'set', data: 'sessid', value: msg.data || ''});
									 startApp();
								  }
							  });
						  } else {
							  startApp();
						  }
					  }
		              blElectron = (window && window.process && window.process.type && require);
		              if (blElectron) {
		                remote = require('electron').remote;
		                path = require('path');
		                url = require('url');
		                win = window.glbWin || {};
		              }
		              win_fetch({cmd: 'setuser', data: user});
		              if (post) {
		                ajax('POST', post, user, function(hStatus, hResp) {
		                  if (hStatus == 'ok') { 
		                    verifyLogin(); 
		                  }
		                });
		              } else { verifyLogin(); }
		            }, 800);
		          };
		          window.authFailure = function() {
		            count++;
		            if (count > 2) { 
		              window.location.href = window.fail;
		            } else {
		              window.location.href = window.base + '?' +
		                'p=' + window.post + '&' +
		                's=' + window.redir + '&' +
		                'f=' + window.fail + '&' +
		                'l=' + window.lic + '&' +
		                'c=' + window.count;
		            }
		          };
		          // Save the base domain name.
		          window.domain = url.split('/')[2] || server;
		          
		          // *************
		          // *   START   *
		          // *************
		          ajax('GET', 'ping', null, function(resp, data) {
		            // Pull out parameters.
		            url = url.split(/\?|\&/);
		            window.base = url[0];
		            
		            // Map Parameters from URL.
		            url.forEach(function(itm) {
		              if (itm.split('=')[1]) {
		                if (parmMap[itm.split('=')[0]]) window[parmMap[itm.split('=')[0]]] = itm.split('=')[1];
		              }
		            });
		            
		            // If No redirect URL, simply close app.
		            if (!window.redir) { window.redir = '#app#'; }
		          });
		          $f.setfocus(_dlg, 'login');
				};
		      
				self.addListener = function() {
				  window.addEventListener('message', function(e) {
		              var msg = JSON.parse(e.data);
		            
		              switch (msg.cmd) {
		                case 'enable':
		                case 'disable':
		                case 'hide':
		                case 'show':
		                  if (msg.data) { $f[msg.cmd](_dlg, msg.data); }
		                  break;
		                case 'reload':
		                  window.location.reload();
		                  break;
		                case 'nav':
		                  window.location.href = msg.data;
		                  break;
		                case 'log':
		                  console.log('iframe: ' + msg.data);
		                  break;
		                case 'close':
		                  break;
		              }
		          });
		          if (window.parent) window.parent.postMessage(JSON.stringify({cmd: 'onload', data: ''}), '*');
				};
		       	self.postLogin = function(dlg, cbk) {
		          dlg = dlg || 'loginmain';
		          
		          var ui = $f.pull(dlg);
		          var user = {};
		          var payload = {
		            login: ui.username,
		            pass: ui.password
		          };
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'login', payload, function(resp, msg) {
		              if (resp == 'ok' && msg.result) {
		                  user.token = msg.data;
		                  win_fetch({cmd: 'set', data: 'token', value: user.token || ''});
		              
		              	  // fetch profile from token
		              	  ajax('POST', 'me/' + user.token, {fields: 'id,sessionid,type,app,pubkey,name,email,firstname,lastname,image'}, function(resp, data) {
		                  	if (resp == 'ok') {
		                      var profile = JSON.parse(data);
		                      
		                      console.log('Good to see you, ' + profile.name + '.');
		                      user.type = 'nimblesolutions';
		                      user.access = profile.type;
		                      user.isAdmin = (profile.type == 'admin');
		                      user.isOwner = (profile.type == 'owner');
		                      user.app = profile.app || 'global';
		                      user.pubid = profile.id;
		                      user.firstname = profile.firstname;
		                      user.lastname = profile.lastname;
		                      user.name = profile.name;
		                      user.pubkey = profile.pubkey;
		                      user.sessionImg = profile.image || '';
		                      user.email = profile.email;
		                    
		                      $f.text('frmmain', 'login', 'Good to see you, ' + user.name + '.  |  Logout');
		                      
		                      // Complete login process.
		                      window.authComplete(user, profile.sessionid, function() {
		                        if (cbk) cbk(true);
		                      });
		                  	} else {
		                      self.showError('Access Denied', 'Invalid user profile.');
		                      if (cbk) cbk(false);
		                    }
		                  });
		              } else {
		                self.showError('Access Denied', 'Invalid login or password.');
		                if (cbk) cbk(false);
		              }
		            });
		        };
		        self.postLogout = function(cbk) {
		          var payload = {
		            version: 2.0,
		            pubid: USER.acct.pubid,
		            sessid: USER.acct.sessionId
		          };
		          
		          ajax('POST', 'logout', payload, function(resp, data) {
		            $f.unload('loginmain');
		            console.log('Goodbye, ' + USER.acct.name + '.');
		            delete USER.acct;
		            USER.data = {};
		            
		            if (cbk) cbk();
		          });
		        };
		      
		      	self.postRegister = function(dlg) {
		          dlg = dlg || 'loginregister';
		          var user = {}, payload = $f.pull(dlg);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'register', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                $f.unload(dlg);
		                
		                msgObj = {
		                  title: 'Success',
		                  msg: 'A confirmation link has been sent to your email address. Please click the link.'
		                };
		              } else {
						msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Registration failed or already exists.'  // update this with better messaging.
		                };
		              }
		              
		              AppEvents.msg.init(msgObj, function(res) {
		                $f.unload('loginmsg');
		              });
		            });
		          
		        };
		      	self.postForgot = function(dlg) {
		          dlg = dlg || 'loginforgot';
		          var user = {}, payload = $f.pull(dlg);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'forgot', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                $f.unload(dlg);
						msgObj = {
		                  title: 'Account found.',
		                  msg: 'A reset code has been sent to your email address. (Allow up to 10 minutes.)'
		                };
		              } else {
						msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Msg: ' + data
		                };
		              }
		            
		              AppEvents.msg.init(msgObj, function(res) {
		                $f.unload('loginmsg');
		              });
		            });
		        };
		      	self.postReset = function(dlg) {
		          dlg = dlg || 'loginreset';
		          var user = {}, payload = $f.pull(dlg);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'changepw', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                msgObj = {
		                  title: 'Success!',
		                  msg: 'You password has been reset successfully.'
		                };
		              } else {
		                msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Msg: ' + data
		                };
		              }
		              
		              AppEvents.msg.init(msgObj, function(res) {
		                $f.unload('loginmsg');
		              });
		            });
		        };
		      
		      	// User License Agreement
		      	self.postLicense = function(dlg) {
		          dlg = dlg || 'loginlicense';
		          var user = {}, payload = $f.pull(dlg);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'license', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                msgObj = {
		                  title: 'Success',
		                  msg: 'Agreement accepted.'
		                };
		              } else {
		                msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Unable to process.'
		                };
		              }
		              
		              AppEvents.msg.init(msgObj, function(res) {
		                $f.unload('loginmsg');
		              });
		            });
		        };
		      	self.loadLicense = function() {
		          var query = App.App.query;
		          /*
		            	info:
		                back: url back
		                confirm: url success
		                deny: url fail
		            */
		          if (!$login.showing) $f.show('loginlicense');
		          if (query.info) {
		              $me.disable('btnagree');
		              $me.hide('icnback');
		              if (query.back) $me.show('icnback');
		              
		              $me.text('info', '');
		              $rest.get('/static/legal/'+ query.info, function(status, data) {
		                $me.text('info', data);
		                $me.enable('btnagree');
		              });
		            }
		        };
		      
		      	self.showError = function(title, info) {
					AppEvents.msg.init({
		              title: title,
		              msg: info
		            }, function(res) {
		              $f.unload('loginmsg');
		            });
		        };
		      	self.showing = false;
		      	self.showChild = function(dlg, prev) {
		          _prev.push(prev);
		          self.showing = true;
		          $f.load(dlg);
		          $f.max(dlg, function(anim) {
		            if (anim.pos == 100) {
		              $f.show(dlg);
		              $f.full(dlg);
		              if (prev) $f.hide(prev);
		              self.showing = false;
		            }
		          });
		        };
		        self.hideChild = function(dlg, blUnload) {
		          var _prvname;
		          
		          $f[blUnload ? 'unload' : 'hide'](dlg);
		          if (_prev.length > 0) _prvname = _prev.pop();
		          $f.show(_prvname);
		        };
		      	self.setFullScreen = function(dlg) {
		          _prev.push(dlg);
		          $f.load(dlg);
		          $f.show(dlg);
		          $f.full(dlg);
		        };
		      
		      	self.loadPrivacy = function() {
		          var query = App.App.query;
		          if (!$login.showing) $f.show('loginpolicy');
		          if (query.info) {
		              $me.disable('btnagree');
		              $me.hide('icnback');
		              if (query.back) $me.show('icnback');
		              
		              $me.text('info', '');
		              $rest.get('/static/legal/'+ query.info, function(status, data) {
		                $me.text('info', data);
		                $me.enable('btnagree');
		              });
		            }
		        };
		      
		        self.onload = function(main) {
		          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
		        };
			};
		  
			login.prototype.type = function () {
				return "login";
			};
			login.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return login;
		});
		
		/* Validate Component Manager/Factory :
		   
		*/
		FACTORY.Register("Validator", function ValidateFactory() {
			var Validate = function (config) {
				var self = this;
		      	function highlight(ctrl, obj, key) {
		          	var err = '', bclr = 'none', bsze = '0px';
		          	if (obj && obj[key]) {
		              err = obj[key]; bclr = 'red'; bsze = '1px';
		            }
		            $me.prop(ctrl, 'title', err);
		          	$me.style(ctrl, {'border-color': bclr, 'border-width': bsze} );
		        }
		      
				self.reset = function() {
		          var chk, constraint;
		          constraint = {
		            email: {
		              length: { maximum: 128 },
		              email: true, 
		              presence: { allowEmpty: false, message: 'is required. \n' }
		            },
		            password: {
		              length: { minimum: 6, maximum: 20 },
		              equality: {
		                attribute: "confirm",
		                message: "is not complex enough",
		                comparator: function(v1, v2) {
		                  return JSON.stringify(v1) === JSON.stringify(v2);
		                }
		              }
		            },
		            confirm: {
		              length: { minimum: 6, maximum: 20 },
		              equality: "password"
		            },
		            resetcode: { 
		              presence: { allowEmpty: false, message: 'is required. \n' }
		            }
		          };
		          chk = validate({
		            email: $me.value('email'),
		            resetcode: $me.value('token'),
		            password: $me.value('password'),
		            confirm: $me.value('confirm')
		          }, constraint);
		          highlight('email', chk, 'email');
		          highlight('token', chk, 'token');
		          highlight('password', chk, 'password');
		          highlight('confirm', chk, 'confirm');
		          $me[chk ? 'disable' : 'enable']('btnvalidate');
		        };
		      	self.login = function() {
		          var chk, constraint;
		          constraint = {
		            login: { 
		              presence: { allowEmpty: false, message: 'is required. \n' }
		            },
		            password: { 
		              presence: { allowEmpty: false, message: 'is required. \n' }
		            }
		          };
		          chk = validate({
		            login: $me.value('username'),
		            password: $me.value('password')
		          }, constraint);
		          highlight('username', chk, 'login');
		          highlight('password', chk, 'password');
		          $me[chk ? 'disable' : 'enable']('btnlogin');
		        };
		     	self.forgot = function() {
		          	var constraint = {
		              email: {
		                length: { maximum: 128 },
		                email: true,
		                presence: { allowEmpty: false, message: 'is required. \n' } }
		            };
		          
		          	var chk = validate({
		              email: $me.value('email')
		            }, constraint);
		          
		          	highlight('email', chk, 'email');
		          	$me[chk ? 'disable' : 'enable']('btnsave');
		        };
		      	self.profile = function() {
		          	var constraint = {
		              login: {
		                length: { minimum: 3, maximum: 32 },
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              email: {
		                length: { maximum: 128 },
		                email: true,
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              firstname: {
		                length: { maximum: 64 },
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              lastname: {
		                length: { maximum: 128 },
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              dob: { presence: true },
		              password: {
		                length: { minimum: 6, maximum: 20 },
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              }
		            };
		          
		          	var chk = validate($me.pull(), constraint);
		          
		          	highlight('login', chk, 'login');
		          	highlight('email', chk, 'email');
		            highlight('firstname', chk, 'firstname');
		          	highlight('lastname', chk, 'lastname');
		          	highlight('dob', chk, 'dob');
		          	highlight('password', chk, 'password');
		          
		          	$me[chk ? 'disable' : 'enable']('btnupdate');
		        };
		      	self.register = function() {
					var constraint = {
		              login: {
		                length: { minimum: 3, maximum: 32 },
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              email: {
		                length: { maximum: 128 },
		                email: true, 
		                presence: { allowEmpty: false, message: 'is required. \n' }
		              },
		              password: {
		                length: { minimum: 6, maximum: 20 },
		                equality: {
		                    attribute: "confirm",
		                    message: "is not complex enough",
		                    comparator: function(v1, v2) {
		                      return JSON.stringify(v1) === JSON.stringify(v2);
		                    }
		                  }
		              },
		              confirm: {
		                length: { minimum: 6, maximum: 20 },
		                equality: "password"
		              }
		            };
		          
		          	var chk = validate({ 
		              login: $me.value('login'),
		              email: $me.value('email'),
		              password: $me.value('password'),
		              confirm: $me.value('confirm'),
		            }, constraint);
		          
		          	highlight('login', chk, 'login');
		          	highlight('email', chk, 'email');
		          	highlight('password', chk, 'password');
		          	highlight('confirm', chk, 'confirm');
		          
		          	$me[chk ? 'disable' : 'enable']('btnsave');
		        };
			};
		  
			Validate.prototype.type = function () {
				return "Validator";
			};
			Validate.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Validate;
		});
		
		/* Login Component Manager/Factory :
		   A template factory example.
		   Updated: 1-28-2025
		*/
		FACTORY.Register("Login", function LoginFactory() {
			var Login = function (config) {
				var self = this;
				var $phone, $rest, $app;
		      	var $val = $fctry.new('Validator'),
		      		$api = $fctry.new('LoginAPI');
		      	var tmr;
		      
		      	function delayValidate(fn) {
		          tmr = setTimeout(function() { fn(); }, 300);
		        }
		      
		      	self.appContext = function(app) {
		          $api.context(app);
		        };
		      
		        self.postLogout = function(cbk) {
		          $api.postLogout(function() {
		            $f.text('frmmain', 'login', 'Login/Register');
		            AppEvents.msg.init({
		              title: 'Leaving so soon?',
		              msg: 'Thank you for visiting, and supporting this project.'
		            }, function(res) {
		                $f.unload('loginmsg');
		            });
		            
		            if (cbk) cbk();
		          });
		        };
		      
				self.forgot = {
		          onactivate: function() {
		            $f.setfocus('loginforgot', 'email');
		          },
		          cancel: {
		            click: function(e, itm) {
		              $api.hideChild('loginforgot');
		            }
		          },
		          reset: {
		            click: function(e, itm) {
		              $api.postReset('loginforgot');
		            }
		          },
		          user: {  // Not used.
		            onchange: function(e, itm) {
		              $val.forgot();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginforgot', 'email');
		              delayValidate($val.forgot);
		            }
		          },
		          email: {
		            onchange: function(e, itm) {
		              $val.forgot();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginforgot', 'user');
		              delayValidate($val.forgot);
		            }
		          }
		        };
		      	
		      	self.main = {
					onload: function(e, itm) {
		              $api.initMethods('loginmain');
					},
					onactivate: function(e, itm) {
		              $with($f, [
		                ['pos', 'loginmain', '', 0, 0],
		                ['full', 'loginmain']
		              ]);
					},
					beforeunload: function(e, itm) {
					},
		            username: {
		              onchange: function(e, itm) {
		                $val.login();
		              },
		              keyup: function(e, itm) {
		                if (tmr) { clearTimeout(tmr); }
		                if ([13].indexOf(e.which) > -1) $f.setfocus('loginmain', 'password');
		                delayValidate($val.login);
		              }
		            },
		            password: {
		              onchange: function(e, itm) {
		                $val.login();
		              },
		              keyup: function(e, itm) {
		                if (tmr) { clearTimeout(tmr); }
		                if ([13].indexOf(e.which) > -1) {
		                  self.main.login.click(e, itm);
		                  e.stopPropagation();
		                }
		                delayValidate($val.login);
		              }
		            },
		            login: {
		              click: function(e, itm) {
		                $f.disable('loginmain', 'btnlogin');
		                $api.postLogin(null, function(resp) {
		                  if (resp) {
		                    // if (USER.acct && USER.acct.isAdmin) $f.show('appmain', 'icnadd');
		                  }
		                });
		              }
		            },
		          	register: {
		              click: function(e, itm) {
		                $api.showChild('loginregister', 'loginmain');
		              }
		            },
		            forgot: {
		              click: function(e, itm) {
		                $api.showChild('loginforgot', 'loginmain');
		              }
		            },
		            reset: {
		              click: function(e, itm) {
		                $api.showChild('loginreset', 'loginmain');
		              }
		            }
				};
		     	
		      	self.msg = {
		          init: function(parms, fn) {
		            var me = self.msg;
		            
		            parms.fn = fn;
		            me._parms = parms;
		            $f.load('loginmsg');
		            $f.text('loginmsg', 'msgtitle', parms.title);
		            $f.text('loginmsg', 'msg', parms.msg);
		            
		            $f.zorder('loginmsg', 10);
		            $f.full('loginmsg');
		            $f.show('loginmsg');
		          },
		          maximize: function() {
		          },
		          ok: {
		            click: function(e, itm) {
		              var me = self.msg;
		              if (me._parms.fn) { me._parms.fn('ok'); }
		              $f.unload('loginmsg');
		              e.stopPropagation();
		            }
		          }
		        };
		      
		      	self.confirm = {
		          init: function(parms, fn) {
		            var me = self.confirm;
		            
		            parms.fn = fn;
		            me._parms = parms;
		            
		            $f.load('loginconfirm');
		            $f.text('loginconfirm', 'msgtitle', parms.title);
		            $f.text('loginconfirm', 'msg', parms.msg);
		            $f.full('loginconfirm');
		            $f.zorder('loginconfirm', 10);
		            $f.show('loginconfirm');
		          },
		          maximize: function() {
		          },
		          yes: {
		            click: function(e, itm) {
		              var me = self.confirm;
		              if (me._parms.fn) { me._parms.fn('yes'); }
		              $f.unload('loginconfirm');
		              e.stopPropagation();
		            }
		          },
		          no: {
		            click: function(e, itm) {
		              var me = self.confirm;
		              if (me._parms.fn) { me._parms.fn('no'); }
		              $f.unload('loginconfirm');
		              e.stopPropagation();
		            }
		          }
		        };
		      
		      	self.prompt = {
		          init: function(parms, fn) {
		            var me = self.prompt;
		            
		            parms.fn = fn;
		            me._parms = parms;
		            $f.load('loginprompt');
		            $f.text('loginprompt', 'msgtitle', parms.title);
		            $f.text('loginprompt', 'msgdesc', parms.desc);
		            $f.full('loginprompt');
		            $f.setprop('loginprompt', 'input', {
		              type: parms.type ? parms.type : '',
		              placeholder: parms.placeholder ? parms.placeholder : ''
		            });
		            $f.zorder('loginprompt', 10);
		            $f.show('loginprompt');
		            $f.setfocus('loginprompt', 'input');
		          },
		          maximize: function() {
		          },
		          cancel: {
		            click: function(e, itm) {
		              var me = self.prompt;
		              
		              if (me._parms.fn) { me._parms.fn('', true); }
		              $f.unload('loginprompt');
		              e.stopPropagation();
		            }
		          },
		          ok: {
		            click: function(e, itm) {
		              var me = self.prompt;
		              if (me._parms.fn) { me._parms.fn($f.value('loginprompt', 'input')); }
		              $f.unload('loginprompt');
		              e.stopPropagation();
		            }
		          }
		        };
		      
		      	self.register = {
		          onactivate: function() {
		            $f.setfocus('loginregister', 'login');
		          },
		          cancel: {
		            click: function(e, itm) {
		              $api.hideChild('loginregister');
		            }
		          },
		          register: {
		            click: function(e, itm) {
		              $api.postRegister();
		            }
		          },
		          license: {
		            click: function(e, itm) {
		              $msg.showPolicy({title: '', msg: ''});
		            }
		          },
		          login: {
		            onchange: function(e, itm) {
		              $val.register();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'email');
		              delayValidate($val.register);
		            }
		          },
		          email: {
		            onchange: function(e, itm) {
		              $val.register();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'password');
		              delayValidate($val.register);
		            }
		          },
		          password: {
		            onchange: function(e, itm) {
		              $val.register();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'confirm');
		              delayValidate($val.register);
		            }
		          },
		          confirm: {
		            onchange: function(e, itm) {
		              $val.register();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'login');
		              delayValidate($val.register);
		            }
		          }
		        };
		      
		      	self.reset = {
		          onactivate: function() {
		            $f.setfocus('loginreset', 'email');
		          },
		          cancel: {
		            click: function(e, itm) {
		              $api.hideChild('loginreset');
		            }
		          },
		          update: {
		            click: function(e, itm) {
		              $api.postReset();
		            }
		          },
		          email: {
		            onchange: function(e, itm) {
		              $val.reset();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'password');
		              delayValidate($val.reset);
		            }
		          },
		          password: {
		            onchange: function(e, itm) {
		              $val.reset();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'confirm');
		              delayValidate($val.reset);
		            }
		          },
		          confirm: {
		            onchange: function(e, itm) {
		              $val.reset();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'code');
		              delayValidate($val.reset);
		            }
		          },
		          code: {
		            onchange: function(e, itm) {
		              $val.reset();
		            },
		            keyup: function(e, itm) {
		              if (tmr) { clearTimeout(tmr); }
		              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'email');
		              delayValidate($val.reset);
		            }
		          }
		        };
		      
		      	self.splash = {
					onload: function(e, itm) {
		              $f.full('loginsplash');
		              $f.load('loginmain');
		              setTimeout(function() {
		                $f.unload('loginsplash');
		                $f.show('loginmain');
		                $phone = $fctry.new('Phone');
		              }, 3500);
		              // Initialize and REST calls for the public view
		              // of the site/app.
					},
					onactivate: function(e, itm) {
					},
					beforeunload: function(e, itm) {
					}
				};
		      
				self.onload = function(main) {
		          $api.domain(main._config.domain());
		          $phone = main._shared.phone;
		          $rest = main._shared.rest;
		          $app = main._shared.app;
				};
			};
			Login.prototype.type = function () {
				return "Login";
			};
			Login.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Login;
		});
		
		/* Events Component Manager/Factory :
		   
		*/
		FACTORY.Register("Events", function EventsFactory() {
			var Events = function (config) {
				var self = this;
		        self._config = $fctry.new('Config');
		        if (typeof(Env) == 'undefined') { Env = $fctry.new('Env'); }
		      
		      	var $phone = $fctry.new('Phone'), $search,
		            $rest = $fctry.new('Rest'),
		      		$app = $fctry.new('Application');
		      
		      	self._shared = {
		          env: Env,
		          phone: $phone,
		          rest: $rest,
		          app: $app
		          // Attach _shared factories that can be pushed to
				  // other factories via onload() event.
		        };
				
		      	self.startSession = function(sessid) {
				  // Trigger this after a user has logged into
				  // the site and created a sessionid.
		          function start() {
		            $f.unload('loginmain');
		            if ($app) {
		              $app.main.init();
		              $app.main.start();
		            } else {
		              $f.load('applanding');
		              $f.full('applanding');
		              $f.show('applanding');
		            }
		          }
				  // Login Complete.
		          // - Current sessionID passed as sessid. 
		          // - Current User Details located on USER.acct.
		          $f.disable('loginmain');
		          if (USER.token && !USER.acct) {
		            $rest.post($nim.core_server + 'me/' + USER.token, {clear: false, fields: 'type,firstname,lastname,email'}, function(resp, data) {
		              var regcode;
		              if (resp == 'ok' && data) {
		                data = sdkString.restJson(data);
		                USER.isAdmin = (data.type == 'admin');
		                USER.isPaid = false;
		                USER.type = data.type;
		                USER.email = data.email;
		                USER.token = USER.sessionId;
		                USER.sessid = USER.session.id;
		                USER.pubid = USER.session.pubid;
		                USER.app = USER.session.app;
		                USER.name = (data.firstname + ' ' + data.lastname).trim() || USER.session.name;
		                delete USER.sessionId;
		                delete USER.session;
		                _secureacct();
		                
		                start();
		              }
		            });
		          } else {
		            start();
		          }
		        };
		      
		      	if (typeof($app) != 'undefined') {
		          MyApp = $app;
		          self.app = $app;
		        }
		      	self.login = $fctry.new('Login');
		      	self.confirm = self.login.confirm;
		        self.prompt = self.login.prompt;
		      	self.msg = self.login.msg;
		        
		        // Trigger onLoad event on all attached factories,
		        // to share necessary methods in a tree.
		        for (var mod in self) {
		          if (self[mod].onload) { self[mod].onload(self); }
		        }
			};
			
		  	Events.prototype.type = function () {
				return "Events";
			};
			Events.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Events;
		});
		
		/* Me Component Manager/Factory :
		   
		*/
		FACTORY.Register("Me", function MeObjFactory() {
			var MeInst = function (config) {
				var self = this;
		        var obj = config.resolveName(), _form = obj.InstForm, _ctrl = obj.Control;
		      	var doc = document;
		      
		      	function resolveName(fn, ctrl) {
		          return {dlg: _form, ctrl: ctrl || ''};
		        }
		      	
		      	self.target = function(id) {
		          var obj;
		          
		          if (!id) {
		            return _form;
		          } else { 
		            obj = id.resolveName();
		            _form = obj.InstForm;
		            _ctrl = obj.Control;
		            
		            self._elem = doc.getElementById(id);
		          }
		        };
				
		      	// PicClip, Tab, Class, Menu & List Control custom methods.
		      	// Parameter Format: (dlg, ctrl, p1, p2, p3, p4, p5, p6)
		      	// NOTE: Most methods only use p1 - p3.
		      	["picclip.setrows", "picclip.getrows", "picclip.setcols", "picclip.getcols", "picclip.setgraphiccell", 
		         "picclip.getgraphiccell", "picclip.getcellcount", "picclip.resetcellsize", "picclip.setcellsize",
		         "picclip.getcellsize", "picclip.getcellwidth", "picclip.getcellheight",
		        
		         "list.item", "list.addlist", "list.addchild", "list.add", "list.insert", "list.remove", "list.removeselected", 
		         "list.clear", "list.clearnode", "list.listindex", "list.listcount", "list.selectvalue", "list.selectcaption", 
		         "list.selectindex", "list.selectcheck", "list.gettext", "list.settext", "list.getvalue", "list.getitemdata", 
		         "list.setitemdata", "list.selected", "list.setselected", "list.selecteditem", "list.selectedcaption", 
		         "list.getallselected", "list.getallvalues", "list.getallchecked", "list.getallcaptions", "list.getitemname", 
		         "list.getitemparent", "list.getitemcaption", "list.exists", "list.find", "list.findexact",
		         
		 		 "tab.create", "tab.page", "tab.pages", "tab.select", "tab.add", 
		         "tab.remove", "tab.position", "tab.tabscroll", "tab.elem",
		        
		         "menu.additem", "menu.removeitem", "menu.hide", "menu.unload", "menu.open", "menu.show", "menu.closeall",
		         
		         "class.get", "class.set", "class.add", "class.toggle", "class.remove", "class.swap",
		         "class.invert", "class.list", "class.exists"].forEach(function(fn) {
		          	var type = fn.split('.');
		          	if (!self[type[0]]) { self[type[0]] = {}; }
					self[type[0]][type[1]] = function(ctrl, p1, p2, p3, p4, p5, p6) {
						var obj = resolveName(type[1], ctrl);
						return $f[type[0]][type[1]](obj.dlg, (obj.ctrl || _ctrl), p1, p2, p3, p4, p5, p6);
					};
		        });
		      	// Parameter Format: Add(dlg, ctrl, type, fld, l, t, w, h)
		      	// add, addwidget, attachevents, make.
		   		['add', 'addwidget', 'attachevents', 'make'].forEach(function(fn) {
					self[fn] = function(ctrl, type, fld, l, t, w, h) {
						var obj = resolveName(ctrl);
		              	return $f[fn](obj.dlg, (obj.ctrl || _ctrl), type, fld, l, t, w, h);
					};
		        });
		      	// Parameter Format: (dlg, ctrl, p1, p2)
				['prop', 'style', 'setevent', 'addevent', 'removeevent', 'size',
		         'pos', 'center', 'fadein', 'fadeout', 'flip', 'min', 'restore'].forEach(function(fn) {
					self[fn] = function(ctrl, p1, p2) {
						var obj = resolveName(fn, ctrl);
						if (typeof(p1) == 'string' && typeof(p2) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl), p1) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1);
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), p1, p2) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1, p2);
						}
					};
				});
		      	// Parameter Format: (dlg, ctrl, p1)
				['value', 'checked', 'text', 'caption', 'scale', 'translate',
		         'dockleft', 'docktop', 'dockbottom', 'dockright',
		         'origin', 'rotate', 'width', 'left', 'top', 'height'].forEach(function(fn) {
					self[fn] = function(ctrl, p1) {
						var obj = resolveName(fn, ctrl);
						if (typeof(p1) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl)) : $f[fn](obj.dlg, (obj.ctrl || _ctrl));
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), p1) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1);
						}
					};
				});
		      	// Parameter Format: (dlg, ctrl)
				['unload', 'show', 'type', 'hide', 'enable', 'refresh', 'disable', 'isvisible', 
				 'isenabled', 'iswidget', 'setfocus', 'elem', 'ctrl', 'find', 'buildname',
		         'children', 'issliding', 'isfading', 'isloading', 'getcoords', 'getscreencoords',
		         'getpos', 'getscreenpos', 'vcenter', 'hcenter', 'getcenter', 'disablecontent'].forEach(function(fn) {
					self[fn] = function(ctrl) {
						var obj = resolveName(fn, ctrl);
						return $f[fn](obj.dlg, (obj.ctrl || _ctrl));
					};
				});
		      	// Parameter Format: (dlg, p1)
				['zorder', 'zindex', 'title', 'max', 'full', 'fullscreen', 
		         'eachform', 'eachcontrol', 'push'].forEach(function(fn) {
					self[fn] = function(p1) {
						var obj = resolveName(fn);
						if (typeof(p1) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg) : $f[fn](obj.dlg, p1);
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, p1) : $f[fn](obj.dlg, p1);
						}
					};
				});
		      	// Parameter Format: (dlg)
		 		['pull', 'forms', 'state', 'controls', 'widgets'].forEach(function(fn) {
					self[fn] = function() {
						var obj = resolveName(fn);
						return $f[fn](obj.dlg);
					};
		        });
				
				self['switch'] = function(newdlg, p1, p2) {
					var obj = resolveName('switch');
					return $f['switch'](obj.dlg, newdlg, p1, p2);
				};
		      
		     	// Additional custom methods to align with v5 Property panel.
		      	// 
		        var fnMap = {
		          "font": { fn: "style" },
		          "border": { fn: "style" },
		          "borderwidth": { fn: "style", "style": "border-width" },
		          "borderstyle": { fn: "style", "style": "border-style" },
		          "bordercolor": { fn: "style", "style": "border-color" },
		          "borderradius": { fn: "style", "style": "border-radius" },
		          "fontname": { fn: "style", "style": "font-family" },
		          "fontbold": { fn: "style","style": "font-weight", "value": {"true": "bold", "false": "normal"} },
		          "fontsize": { fn: "style", "style": "font-size" },
		          "fontitalic": { fn: "style", "style": "font-style", "value": {"true": "italic", "false": "normal"} },
		          "fontunderline": { fn: "style", "style": "text-decoration", "value": {"true": "underline", "false": ""} },
		          "fontstrikethru": { fn: "style", "style": "text-decoration",  "value": {"true": "line-through", "false": ""}},
		          "forecolor": { fn: "style", "style": "color" },
		          "backcolor": { fn: "style", "style": "background-color" },
		          "tooltip": { fn: "prop", "style": "title" }
		        };
		      	['font', 'fontname', 'fontbold', 'fontsize', 'fontitalic', 'fontunderline', 'fontstrikethru', 
		         'borderradius', 'borderwidth', 'borderstyle', 'bordercolor', 'forecolor', 'backcolor', 'border', 'tooltip'].forEach(function(fx) {
					self[fx] = function(ctrl, p1) {
						var fn, pval, style, obj = resolveName(fx, ctrl);
		              	if (fnMap[fx]) {
		                  fn = fnMap[fx].fn;
		                  style = fnMap[fx].style || fx;
		                  if (fn) {
		                    if (typeof(p1) == 'undefined') {
		                        return $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl), style);
		                    } else {
		                        p1 = (p1.toString().toLowerCase() == 'true') ? 'true' :
		                            (p1.toString().toLowerCase() == 'false') ? 'false' : p1;
		                        // if text decoration make sure you concatenate or remove value.
		                        if (fnMap[fx].value && style == 'text-decoration') {
		                          pval = $f.getstyle(obj.dlg, (obj.ctrl || _ctrl), style);
		                          pval = pval.replace(fnMap[fx].value['true'], '');
		                          p1 = (fnMap[fx].value[p1]) ? pval.trim() + ' ' + fnMap[fx].value[p1] : pval;
		                        } else {
		                          p1 = fnMap[fx].value ? fnMap[fx].value[p1] || p1 : p1;
		                        }
		                        $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), style, p1);
		                    }
		                  }
		                }
					};
		        });
		      
		      	self.select = function(ctrl) {
		      	  var obj = resolveName(obj.dlg, ctrl);
		          var elem = $f.ctrl(obj.dlg, (obj.ctrl || _ctrl));
		          if (elem && elem.select) elem.select();
		        };
		      	self.destroy = function() {
		          // Clear methods.
		          function remove(obj) {
		            Object.keys(obj).forEach(function(fn) {
		              if (fn != 'destroy' && typeof(obj[fn]) == 'function') {
		                obj[fn] = null;
		                delete obj[fn];
		              }
		            });
		          }
		          
		          remove(self.list);
		          remove(self.tab);
		          remove(self.picclip);
		          remove(self);
		          $me = null;
		        };
			};
		  	MeInst.prototype._type = function () {
				return "MeInst";
			};
			MeInst.prototype._toDto = function () {
				var self = this;
				return { };
			};
			return MeInst;
		});
		/* Phone Cordova Manager/Factory :
		   
		*/
		FACTORY.Register("Phone", function PhoneFactory() {
			var Phone = function () {
				var self = this;
		      	var _cfg = {};
		      	var smsList = [];
		      
		      	var _fsType = '';
		      	if (typeof(LocalFileSystem) != 'undefined') {
		      		_fsType = LocalFileSystem.PERSISTENT;
		        }
		      	var permissions = {}, enable = {};
				var NOTIFY = {
		          DEFAULT_SUCCESS: 'SUCCESS',
		          DEFAULT_ERROR: 'ERROR',
		          
		          MEDIA_SUCCESS: 'MEDIA_SUCCESS',
		          MEDIA_ERROR: 'MEDIA_ERROR',
		          MEDIA_POS_SUCCESS: 'MEDIA_POS_SUCCESS',
		          MEDIA_POS_ERROR: 'MEDIA_POS_ERROR',
		          MEDIA_AMP_SUCCESS: 'MEDIA_AMP_SUCCESS',
		          MEDIA_AMP_ERROR: 'MEDIA_AMP_ERROR',
		          MEDIA_DUR_SUCCESS: 'MEDIA_DUR_SUCCESS',
		          MEDIA_DUR_ERROR: 'MEDIA_DUR_ERROR',
		          MEDIA_INTERVAL: 'MEDIA_INTERVAL',
		          
		          
		          FS_SUCCESS: 'FS_SUCCESS',
		          FS_ERROR: 'FS_ERROR',
		          FS_GETFILE_SUCCESS: 'FS_GETFILE_SUCCESS',
		          FS_GETFILE_ERROR: 'FS_GETFILE_ERROR',
		          FS_STREAM_SUCCESS: 'FS_STREAM_SUCCESS',
		          FS_STREAM_ERROR: 'FS_STREAM_ERROR',
		          FS_EXISTS_SUCCESS: 'FS_EXISTS_SUCCESS',
		          FS_EXISTS_ERROR: 'FS_EXISTS_ERROR',
		          FS_READ_SUCCESS: 'FS_READ_SUCCESS',
		          FS_READ_ERROR: 'FS_READ_ERROR',
		          FS_WRITE_SUCCESS: 'FS_WRITE_SUCCESS',
		          FS_WRITE_ERROR: 'FS_WRITE_ERROR',
		          FS_DELETE_SUCCESS: 'FS_DELETE_SUCCESS',
		          FS_DELETE_ERROR: 'FS_DELETE_ERROR',
		          FS_LIST_SUCCESS: 'FS_LIST_SUCCESS',
		          FS_LIST_ERROR: 'FS_LIST_ERROR',
		          FS_MKDIR_SUCCESS: 'FS_MKDIR_SUCCESS',
		          FS_MKDIR_ERROR: 'FS_MKDIR_ERROR',
		          FS_DELDIR_SUCCESS: 'FS_DELDIR_SUCCESS',
		          FS_DELDIR_ERROR: 'FS_DELDIR_ERROR',
		          FS_DELALL_SUCCESS: 'FS_DELALL_SUCCESS',
		          FS_DELALL_ERROR: 'FS_DELALL_ERROR',
		          
		          GEOLOC_SUCCESS: 'GEOLOC_SUCCESS',
		          GEOLOC_ERROR: 'GEOLOC_ERROR',
		          
		          COMPASS_SUCCESS: 'COMPASS_SUCCESS',
		          COMPASS_ERROR: 'COMPASS_ERROR',
		          
		          MOTION_SUCCESS: 'MOTION_SUCCESS',
		          MOTION_ERROR: 'MOTION_ERROR',
		          
		          GETLIBRARY_SUCCESS: 'GETLIBRARY_SUCCESS',
		          GETLIBRARY_ERROR: 'GETLIBRARY_ERROR',
		          GETALBUM_SUCCESS: 'GETALBUMN_SUCCESS',
		          GETALBUM_ERROR: 'GETALBUMN_ERROR',
		          SAVEIMAGE_SUCCESS: 'SAVEIMAGE_SUCCESS',
		          SAVEIMAGE_ERROR: 'SAVEIMAGE_ERROR',
		          SAVEVIDEO_SUCCESS: 'SAVEVIDEO_SUCCESS',
		          SAVEVIDEO_ERROR: 'SAVEVIDEO_ERROR',
		          
		          CAMERA_SUCCESS: 'CAMERA_SUCCESS',
		          CAMERA_ERROR: 'CAMERA_ERROR',
		          CAMCLENUP_SUCCESS: 'CAMCLEANUP_SUCCESS',
		          CAMCLENUP_ERROR: 'CAMCLEANUP_ERROR',
		          
		          FINDCONTACT_SUCCESS: 'FINDCONTACT_SUCCESS',
		          FINDCONTACT_ERROR: 'FINDCONTACT_ERROR',
		          CREATECONTACT_SUCCESS: 'CREATECONTACT_SUCCESS',
		          CREATECONTACT_ERROR: 'CREATECONTACT_ERROR',
		          PICKCONTACT_SUCCESS: 'PICKCONTACT_SUCCESS',
		          PICKCONTACT_ERROR: 'PICKCONTACT_ERROR',
		          
		          SENDMSGS_SUCCESS: 'SENDMSGS_SUCCESS',
		          SENDMSGS_ERROR: 'SENDMSGS_ERROR',
		          LISTMSGS_SUCCESS: 'LISTMSGS_SUCCESS',
		          LISTMSGS_ERROR: 'LISTMSGS_ERROR',
		          DELETEMSGS_SUCCESS: 'DELETEMSGS_SUCCESS',
		          DELETEMSGS_ERROR: 'DELETEMSGS_ERROR',
		          
		          RESTOREMSGS_SUCCESS: 'RESTOREMSGS_SUCCESS',
		          RESTOREMSGS_ERROR: 'RESTOREMSGS_ERROR',
		          DISABLE_INTERCEPT_SUCCESS: 'DISABLE_INTERCEPT_SUCCESS',
		          DISABLE_INTERCEPT_ERROR: 'DISABLE_INTERCEPT_ERROR',
		          ENABLE_INTERCEPT_SUCCESS: 'ENABLE_INTERCEPT_SUCCESS',
		          ENABLE_INTERCEPT_ERROR: 'ENABLE_INTERCEPT_ERROR',
		          DISABLE_WATCH_SUCCESS: 'DISABLE_WATCH_SUCCESS',
		          DISABLE_WATCH_ERROR: 'DISABLE_WATCH_ERROR',
		          ENABLE_WATCH_SUCCESS: 'ENABLE_WATCH_SUCCESS',
		          ENABLE_WATCH_ERROR: 'ENABLE_WATCH_ERROR'
		        };
		      
		      	if (window.cordova) {
		      	  permissions = cordova.plugins.permissions;
		        }
		        function checkPermission(perm, onSuccess, stub) {
		          self[stub.type] = self[stub.type] || {};
		          
		          function onFailed(type, methods) {
		            if (methods.length > 0) {
		              methods.forEach(function(itm) {
		                self[type][itm] = function() { };
		              });
		            } else {
		              self[type] = function() { };
		            }
		            self[type]._enabled = false;
		            self[type]._status = 'failed';
		          }
		          function error() {
		            if (!self[stub.type]._enabled) { onFailed(stub.type, stub.methods); }
		          }
		          
		          permissions.checkPermission(perm, function(status) {
		            if (status.hasPermission) {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            } else { permissions.requestPermission(perm, function() {
						if (!self[stub.type]._enabled) {
							self[stub.type]._enabled = true;
							self[stub.type]._status = 'success';
							onSuccess();
						  }
						}, error);
					}
		          }, error);
		        }
		      	
		      	self.info = function() {
		          return (window.device && device.cordova) ? {
		            cordova: device.cordova,
		            model: device.model,
		            platform: device.platform,
		            uuid: device.uuid,
		            version: device.version,
		            sernum: device.serial
		          } : null;
		        };
		      	self.isMobile = function() {
		          return $nim.Agent.isMobile && ($nim.Agent.usingAndroid || $nim.Agent.usingIPad);
		        };
		      	self.Agent = function() {
		          return navigator.userAgent;
		        };
		      	self.Vendor = function() {
		          return navigator.vendor;
		        };
				self.PluginList = function() {
		            if (typeof(cordova) != 'undefined') {
		              var itms = cordova.plugins ? Object.keys(cordova.plugins) : [];
		              itms.forEach(function(itm) {
		                console.log('  - ' + itm);
		              });
		            }
				};
				
				enable.orientation = function() {
					self.orientation = {
		              get: function() {
		                return screen.orientation.type;
		              },
		              notify: function() {
		                console.log(screen.orientation.type); // e.g. portrait
		              }
					};
					window.addEventListener("orientationchange", self.orientation.notfy);
				};
				enable.battery = function() {
		          if (!self.battery) {
					self.battery = {
		              	_status: '',
		              	get: function() {
		                  return self.battery._status;
		                },
						notify: function(msg, status) {
		                  	self.battery._status = {msg: msg, status: status};
							console.log(msg);
							console.log(JSON.stringify(status));
						}
					};
					window.addEventListener("batterystatus", function(status) {
						self.battery.notify('battery status', status);
					}, false);
					window.addEventListener("batterylow", function(status) {
						self.battery.notify('battery low', status);
					}, false);
					window.addEventListener("batterycritical", function(status) {
						self.battery.notify('battery critical', status);
					}, false);
		          }
				};
				enable.device = function() {
					self.device = {
						// key: model | platform | uuid | version | manufacturer |
						//      isVirtual | isiOSAppOnMac | serial
						get: function(key) {
							return (device && device[key]) ? device[key] : '';
						}
					};
				};
				enable.compass = function() {
					var compID;
		          
		          	if (navigator.compass) {
		              self.compass = {
		                  _status: '',
		                  get: function() {
		                    return self.compass._status;
		                  },
		                  notify: function(heading) {
		                    self.compass._status = heading;
		                    console.log('Heading: ' + heading.magneticHeading);
		                  },
		                  getHeading: function(fn) {
		                    navigator.compass.getCurrentHeading(function(heading) {
		                      self.compass.notify(heading);
		                      if (fn) { fn(NOTIFY.COMPASS_SUCCESS, heading); }
		                    }, self.compass.error);
		                  },
		                  error: function(errMsg) {
		                    console.log(NOTIFY.COMPASS_ERROR);
		                    console.log(errMsg);
		                  },
		                  start: function() {
		                      compID = navigator.compass.watchHeading(
		                          self.compass.notify, 
		                          self.compass.error,
		                          {frequency: 3000});
		                  },
		                  stop: function() {
		                      navigator.compass.clearWatch(compID);
		                  }
		              };
		            }
				};
				enable.motion = function() {
				  var watchID;
					
		          if (navigator.accelerometer) {
					self.motion = {
		                _status: '',
		              	get: function() {
		                    return self.motion._status;
		                },
						notify: function(acceleration) {
		                  self.motion._status = acceleration;
		                  console.log('Acceleration X: ' + acceleration.x + '\n' +
		                              'Acceleration Y: ' + acceleration.y + '\n' +
		                              'Acceleration Z: ' + acceleration.z + '\n' +
		                              'Timestamp: '      + acceleration.timestamp + '\n');
						},
						getMotion: function(fn) {
							navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
		                      self.motion.notify(acceleration);
		                      if (fn) { fn(NOTIFY.MOTION_SUCCESS, acceleration); }
		                    }, self.motion.error);
						},
						error: function() {
							console.log(NOTIFY.MOTION_ERROR);
						},
						start: function() {
							watchID = navigator.accelerometer.watchAcceleration(
								self.motion.notify, 
								self.motion.error,
								{frequency: 3000});
						},
						stop: function() {
							navigator.accelerometer.clearWatch(watchID);
						}
					};
		          }
				};
				
				enable.globalize = function() {
		          if (navigator.globalization) {
					self.globalize = {
						notify: function(success, res) {
							console.log('response:' + success);
							console.log('  result:' + res);
						},
						getLanguage: function() {
							navigator.globalization.getPreferredLanguage(function(lang) {
								self.globalize.notify(true, lang);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getCurrency: function(curCode) {
							navigator.globalization.getCurrencyPattern(curCode, function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getLocaleName: function() {
							navigator.globalization.getLocaleName(function(locale) {
								self.globalize.notify(true, locale);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						stringToDate: function(str, options) { // {formatLength:'short', selector:'date and time'}
							navigator.globalization.stringToDate(str, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						stringToNumber: function(str, options) { // { type: 'decimal' }
							navigator.globalization.stringToDate(str, function(num) {
								self.globalize.notify(true, num);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						dateToString: function(date, options) {  // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.dateToString(date, function(lDate) {
								self.globalize.notify(true, lDate);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						numberToString: function(num, options) { // { type: 'decimal' }
							navigator.globalization.numberToString(num, function(number) {
								self.globalize.notify(true, number);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDateNames: function(options) { // { type: 'wide', item: 'months' }
							navigator.globalization.getDateNames(function(names) {
								self.globalize.notify(true, names);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDatePattern: function(options) { // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.getDatePattern(function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getFirstDayOfWeek: function() {
							navigator.globalization.getFirstDayOfWeek(function(day) {
								self.globalize.notify(true, day);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getNumberPattern: function(options) { // {type: 'decimal'}
							navigator.globalization.getNumberPattern(function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						isDayLightSavingsTime: function(date) {
							navigator.globalization.isDayLightSavingsTime(date, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							});
						}
					};
		          }
				};
				enable.network = function() {
		          if (!self.network) {
					self.network = {
						state: '',
		                get: function() {
		                  return self.network.state;
		                },
						notify: function(msg) {
							console.log('Network Type  :' + self.network.state);
							console.log('Network Status:' + msg);
						},
						update: function() {
							var networkState = navigator.connection.type;
							var states = {};
							
							if (typeof(Connection) == 'object') {
								states[Connection.UNKNOWN]  = 'Unknown';
								states[Connection.ETHERNET] = 'Ethernet';
								states[Connection.WIFI]     = 'WiFi';
								states[Connection.CELL_2G]  = 'Cell 2G';
								states[Connection.CELL_3G]  = 'Cell 3G';
								states[Connection.CELL_4G]  = 'Cell 4G';
								states[Connection.CELL]     = 'Cell generic';
								states[Connection.NONE]     = 'No network';
							}
							
							self.network.state = states[networkState] || 'Unknown';
						}
					};
					
					document.addEventListener("offline", function() {
						self.network.notify('offline');
					}, false);
					document.addEventListener("online", function() {
						self.network.notify('online');
					}, false);
		          }
				};
				enable.browser = function() {
		          if (window.cordova && cordova.InAppBrowser) {
					self.browser = {
						open: cordova.InAppBrowser.open
					};
		          }
				};
				enable.statusbar = function() {
		          if (typeof(StatusBar) == 'object') {
					self.statusbar = {
						get: function() {
							return StatusBar;
						},
						hide: StatusBar.hide,
						show: StatusBar.show
					};
		          }
				};
				
		      	var _vibrate = {
		          play: function(dur) {
		            if (navigator.vibrate) { navigator.vibrate(dur); }
		          }
		        };
		        enable.vibrate = function() {
		          checkPermission(permissions.VIBRATE, function() {
		              self.vibrate = Object.assign(self.vibrate, _vibrate);
					}, {type: 'vibrate', methods: Object.keys(_vibrate)});
		        };
		      
		        var _contacts = {
		            create: function(obj, fn) {
		              var myContact;
		              // {"displayName": "Test User"}
		              if (navigator.contacts) {
		                try {
		                  myContact = navigator.contacts.create(obj);
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
		                  if (fn) { fn(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
		                } catch(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_ERROR); }
		                  if (fn) { fn(NOTIFY.CREATECONTACT_ERROR); }
		                }
		              }
		            },
		            find: function(filter, fields, fn) {
		              if (navigator.contacts) {
		                // find all contacts with 'Bob' in any name field
		                // var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		                var options      = new ContactFindOptions();
		                options.filter   = filter;
		                options.multiple = true;
		                options.desiredFields = [ fields[0] || navigator.contacts.fieldType.id ];
		                options.hasPhoneNumber = true;
		                navigator.contacts.find(fields, function(contacts) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
		                  if (fn) { fn(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FINDCONTACT_ERROR, err); }
		                }, options);
		              }
		            },
		            pickContact: function(fn) {
		              if (navigator.contacts) {
		                navigator.contacts.pickContact(function(contact) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_SUCCESS, contact); }
		                  if (fn) { fn(NOTIFY.PICKCONTACT_SUCCESS, contact); }
		                },function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.PICKCONTACT_ERROR, err); }
		                });
		              }
		            }
		        };
		      	enable.contacts = function() {
					checkPermission(permissions.GET_ACCOUNTS, function() {
					  checkPermission(permissions.READ_CONTACTS, function() {
						checkPermission(permissions.WRITE_CONTACTS, function() { 
						  self.contacts = Object.assign(self.contacts, _contacts);
						}, {type: 'contacts', methods: Object.keys(_contacts)});
					  }, {type: 'contacts', methods: Object.keys(_contacts)});
					}, {type: 'contacts', methods: Object.keys(_contacts)});
				};
		      
		      	/*
		        	CORDOVA App Folder:
		            cordova.file.applicationDirectory
		            
		        	FILE SYSTEM Types:
		            - window.TEMPORARY
		            = LocalFileSystem.PERSISTENT
		        */
		        var _files = {
		            type: function(type) {
		              if (type) {
		                _fsType = type;
		              } else {
		                return _fsType;
		              }
		            },
		            exists: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		          	path: function(key) {
		              switch (key.toLowerCase()) {
		                case 'app':
		                  return cordova.file.applicationDirectory;
		                  
		                case 'store':
		                  return cordova.file.applicationStorageDirectory;
		 
		                case 'temp':
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		                  
		                case 'cache':
		                  return cordova.file.cacheDirectory;
		                  
		                case 'docs':
		                  return cordova.file.documentsDirectory || cordova.file.applicationDirectory + 'docs/';
		                  
		                case 'shared':
		                  return cordova.file.sharedDirectory || cordova.file.applicationDirectory + 'shared/';
		                  
		                case 'sync':
		                  return cordova.file.syncedDataDirectory || cordova.file.applicationDirectory + 'sync/';
		                  
		                default:
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		              }
		            },
		            list: function(path, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  var reader = fs.createReader();
		                  reader.readEntries(
		                    function (entries) {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_SUCCESS, entries); }
		                      if (fn) { fn(NOTIFY.FS_LIST_SUCCESS, entries); }
		                    },
		                    function (err) {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_ERROR, err); }
		                      if (fn) { fn(NOTIFY.FS_LIST_ERROR, err); }
		                    }
		                  );
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            dirExists: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
							if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
					},
					delDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function(parent) {
		                    parent.remove(function() {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_SUCCESS, true); }
		                      if (fn) { fn(NOTIFY.FS_DELDIR_SUCCESS, true); }
		                    }, function() {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false); }
		                      if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, false); }
		                    });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            makeDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  folder = folder || fs.root;
		                  fs.root.getDirectory(folder, {create: true, exclusive: false}, function(parent) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_SUCCESS, parent); }
		                    if (fn) { fn(NOTIFY.FS_MKDIR_SUCCESS, parent); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_MKDIR_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            read: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {}, function(fileEntry) {
		                     fileEntry.file(function(fileHnd) {
		                        var reader = new FileReader();
		                        reader.onloadend = function() {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_READ_SUCCESS, this.result); }
		                           if (fn) { fn(NOTIFY.FS_READ_SUCCESS, this.result); }
		                        };
		                        reader.readAsText(fileHnd);
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                 if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            write: function(file, data, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: true}, function(fileEntry) {
		                     fileEntry.createWriter(function(fileWriter) {
		                        fileWriter.onwriteend = function(e) {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_SUCCESS, e); }
		                           if (fn) { fn(NOTIFY.FS_WRITE_SUCCESS, e); }
		                        };
		                        fileWriter.onerror = function(e) {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_ERROR, e); }
		                           if (fn) { fn(NOTIFY.FS_WRITE_ERROR, e); }
		                        };
		                        var blob = new Blob([data], {type: 'text/plain'});
		                        fileWriter.write(blob);
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
						 if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            delete: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                     fileEntry.remove(function() {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_SUCCESS, true); }
		                       if (fn) { fn(NOTIFY.FS_DELETE_SUCCESS, true); }
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_DELETE_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            deleteAll: function(path, fn) {
		              self.files.list(path, function(status, items) {
		                if (status == NOTIFY.FS_LIST_SUCCESS) {
		                  items.forEach(function(item) {
		                    self.files.delete(path + item);
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELALL_SUCCESS, true); }
		                    if (fn) { fn(NOTIFY.FS_DELALL_SUCCESS, true); }
		                  });
		                }
		              });
		            }
		        };
		      	enable.files = function() {
					checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					  self.files = Object.assign(self.files, _files);
					}, {type: 'files', methods: Object.keys(_files)});
				};
		        var _media = {
		            init: function(src, fn) {
		              return new Media(src, function() {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_SUCCESS, true); }
		                   if (fn) { fn(NOTIFY.MEDIA_SUCCESS, true); }
		              }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_ERROR, err); }
		                   if (fn) { fn(NOTIFY.MEDIA_ERROR, err); }
		              });
		            },
		            watch: function(dur, fn) {
		              var counter = 0;
		              return setInterval(function() {
		                counter += dur;
		                if (fn) { fn(NOTIFY.MEDIA_INTERVAL, counter); }
		              }, dur);
		            },
		            clear: function(watchId) {
		              clearInterval(watchId);
		            },
		            pos: function() {},
		            duration: function() {},
		            getCurrentAmplitude: function(media, fn) {
		              media.getCurrentAmplitude(
		                function (pct) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
		                  if (fn) { fn(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
		                },
		                function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_ERROR, err); }
						  if (fn) { fn(NOTIFY.MEDIA_AMP_ERROR, err); }
		                }
		              );
		            },
		            getCurrentPosition: function(media, fn) {
		              media.getCurrentPosition(
		                function (pos) {
		                  if (pos > -1) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_SUCCESS, pos); }
		                    if (fn) { fn(NOTIFY.MEDIA_POS_SUCCESS, pos); }
		                  }
		                },
		                function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.MEDIA_POS_ERROR, err); }
		                }
		              );
		            },
		            getDuration: function(media, fn) {
		              var counter = 0;
		              var timerDur = setInterval(function() {
		                  counter = counter + 100;
		                  if (counter > 2000) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_ERROR, null); }
		                      if (fn) { fn(NOTIFY.MEDIA_DUR_ERROR, null); }
		                  }
		                  var dur = media.getDuration();
		                  if (dur > 0) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
		                      if (fn) { fn(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
		                  }
		              }, 100);
		            },
		            play: function(media) {
		              media.play();
		            },
		            pause: function(media) {
		              media.pause();
		            },
		            pauseRecord: function(media) {
		              media.pauseRecord();
		            },
		            release: function(media) {
		              media.release();
		            },
		            resumeRecord: function(media) {
		              media.resumeRecord();
		            },
		            startRecord: function(media) {
		              media.startRecord();
		            },
		            stopRecord: function(media) {
		              media.stopRecord();
		            },
		            stop: function(media) {
		              media.stop();
		            },
		            seekTo: function(media, pos) {
		              // pos in milliseconds. 1 sec = 1000
		              media.seekTo(pos);
		            },
		            setVolume: function(media, vol) {
		              // vol is string from '0.0' to '1.0'
		              media.setVolume(vol);
		            },
		            setRate: function(media, speed) {
		              // Playback speed is number from 0.1 - 4.0; (unknown range)
		              media.setRate(speed);
		            }
		        };
		      	enable.media = function() {
					checkPermission(permissions.READ_AUDIO, function() { 
					  checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function() { 
						checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						  self.media = Object.assign(self.media, _media);
						}, {type: 'media', methods: Object.keys(_media)});
					  }, {type: 'media', methods: Object.keys(_media)});
					}, {type: 'media', methods: Object.keys(_media)});
				};
		        var _geo = {
		            get: function(opts, fn) {
		                var options = opts || {
		                  enableHighAccuracy: true,
		                  maximumAge: 3600000
		                };
		                if (navigator.geolocation) {
		                 navigator.geolocation.getCurrentPosition(function(pos) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
		                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
		                 }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
		                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
		                 }, options);
		                }
		            },
		            watch: function(opts, fn) {
		               var options = opts || {
		                  maximumAge: 3600000,
		                  timeout: 3000,
		                  enableHighAccuracy: true,
		               };
		               if (navigator.geolocation) {
		                 var watchID = navigator.geolocation.watchPosition(function(pos) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
		                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
		                 }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
		                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
		                 }, options);
		                 return watchID;
		               }
		            },
		            clear: function(watchId) {
		              if (navigator.geolocation) { navigator.geolocation.clearWatch(watchId); }
		            }
		        };
		      	enable.geo = function() {
					checkPermission(permissions.ACCESS_COARSE_LOCATION, function() {
					  checkPermission(permissions.ACCESS_FINE_LOCATION, function() {
						checkPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS, function() {
						  self.geo = Object.assign(self.geo, _geo);
						}, {type: 'geo', methods: Object.keys(_geo)});
					  }, {type: 'geo', methods: Object.keys(_geo)});
					}, {type: 'geo', methods: Object.keys(_geo)});
				};
		        var _gallery = {
		          	getThumbnail: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getThumbnail(libItm, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
		                });
		              }
		            },
		          	getPhoto: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getPhoto(libItm, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
		                });
		              }
		            },
		            saveImage: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveImage(url, album, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SAVEIMAGE_ERROR, err); }
		                });
		              }
		            },
		          	saveVideo: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveVideo(url, album, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SAVEVIDEO_ERROR, err); }
		                });
		              }
		            },
		            getlibrary: function(options, fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getLibrary(
		                  function (result) {
		                    var library = result.library;
		                    // Send array of library objects to notify.
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_SUCCESS, library); }
		                    if (fn) { fn(NOTIFY.GETLIBRARY_SUCCESS, library); }
		                  },
		                  function (err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_ERROR, err); }
		                    if (fn) { fn(NOTIFY.GETLIBRARY_ERROR, err); }
		                  },
		                  options || { // optional options
		                    thumbnailWidth: 512,
		                    thumbnailHeight: 384,
		                    quality: 0.8,
		                    includeAlbumData: false // default
		                  }
		                );
		              }
		            },
		            getalbum: function(fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getAlbums(
		                  function (albums) {
		                    // Send an array of almbuns to notify.
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_SUCCESS, albums); }
		                    if (fn) { fn(NOTIFY.GETALBUM_SUCCESS, albums); }
		                  }, 
		                  function (err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_ERROR, err); }
		                    if (fn) { fn(NOTIFY.GETALBUM_ERROR, err); }
		                  }
		                );
		              }
		            }
		        };
		        enable.gallery = function() {
		          checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					self.gallery = Object.assign(self.gallery, _gallery);
				  }, {type: 'gallery', methods: Object.keys(_gallery)});
		        };
		      
		      	var _camera = {
		            getpicture: function(options, fn) {
		              if (navigator.camera) {
		                navigator.camera.getPicture(function(imgURI) {
		                  // var image = document.getElementById('myImage');
		                  // image.src = imageURI;
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMERA_SUCCESS, imgURI); }
		                  if (fn) { fn(NOTIFY.CAMERA_SUCCESS, imgURI); }
		                }, function(err) {
		                  if (_cfg.notify) {  _cfg.notify(NOTIFY.CAMERA_ERROR, err); }
		                  if (fn) { fn(NOTIFY.CAMERA_ERROR, err); }
		                }, options);
		              }
		            },
		            cleanup: function(fn) {
		              if (navigator.camera) {
		                navigator.camera.cleanup(function() {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_SUCCESS); }
		                  if (fn) { fn(NOTIFY.CAMCLEANUP_SUCCESS); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_ERROR, err); }
		                  if (fn) { fn(NOTIFY.CAMCLEANUP_ERROR, err); }
		                });
		              }
		            },
		            options: function(quality, srcType) {
		              var options;
		              if (Camera) {
		                options = {
		                    // Some common settings are 20, 50, and 100
		                    // srcType = Camera.PictureSourceType.CAMERA
		                    quality: quality,
		                    destinationType: Camera.DestinationType.FILE_URI,
		                    // In this app, dynamically set the picture source, Camera or photo gallery
		                    sourceType: srcType,
		                    encodingType: Camera.EncodingType.JPEG,
		                    mediaType: Camera.MediaType.PICTURE,
		                    allowEdit: true,
		                    correctOrientation: true
		                };
		              }
		              return options || null;
		            }
		        };
		        enable.camera = function() {
					checkPermission(permissions.CAMERA, function() {
					  checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						self.camera = Object.assign(self.camera, _camera);
					  }, {type: 'camera', methods: Object.keys(_camera)});
					}, {type: 'camera', methods: Object.keys(_camera)});
				};
		      	// USES: cordova-sms-plugin
		        var _sms = {
					watch: function(fn) {
		              if (window.SMS) {
						  SMS.startWatch(function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_SUCCESS); }
							if (fn) { fn(NOTIFY.ENABLE_WATCH_SUCCESS); }
						  }, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_ERROR); }
							if (fn) { fn(NOTIFY.ENABLE_WATCH_ERROR); }
						  });
					  }
					},
					intercept: function(fn) {
		              if (window.SMS) {
						  SMS.enableIntercept(true, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
							if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
						  }, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_ERROR); }
							if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_ERROR); }
						  });
					  }
					},
		            send: function (addr, msg, fn) {
		              if (window.SMS) { 
		                SMS.sendSMS(addr, msg, function() {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_SUCCESS); }
		                  if (fn) { fn(NOTIFY.SENDMSGS_SUCCESS); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SENDMSGS_ERROR, err); }
		                });
		              } else { alert('SMS is not loaded!'); }
		            },
		            delete: function(filter, fn) {
		              if (window.SMS) {
						  SMS.deleteSMS(filter, function( n ) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_SUCCESS, n); }
							if (fn) { fn(NOTIFY.DELETEMSGS_SUCCESS, n); }
						  }, function(err) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_ERROR, err); }
							if (fn) { fn(NOTIFY.DELETEMSGS_ERROR, err); }
						  });
					  }
		            },
		            list: function(filter, fn) {
		              if (window.SMS) {
						  SMS.listSMS(filter, function(data) {
							// NOTE: data is an array of messages.
							if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_SUCCESS, data); }
							if (fn) { fn(NOTIFY.LISTMSGS_SUCCESS, data); }
						  }, function(err) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_ERROR, err); }
							if (fn) { fn(NOTIFY.LISTMSGS_ERROR, err); }
						  });
					  }
		            },
		            options: function(options) {
		              if (window.SMS) { SMS.setOptions(options);}
		            }
		        };
				enable.sms = function() {
		          if (!self.sms) { self.sms = {}; }
		          function requestSMSPermission() {
		            var success = function (hasPermission) { 
		              if (!hasPermission) {
		                _sms.requestPermission(function() {
		                  console.log('[OK] Permission accepted');
		                  proceed(true);
		                }, function() {
		                  console.info('[WARN] Permission not accepted');
		                  // Handle permission not accepted
		                });
		              }
		            };
		            var error = function (e) { alert('Something went wrong:' + e); };
		            _sms.hasPermission(success, error);
		          }
		          function error(e) {
		            alert('Something went wrong:' + e);
		          }
		          function proceed(hasPermission) {
		            if (hasPermission) {
		              self.sms.createSms = function(number, msg, opts, cbk) {
		                _sms.send(number, msg, opts, function() {
		                  self.sms._enabled = true;
		                  self.sms._status = 'success';
		                  if (cbk) { cbk(true, 'ok'); }
		                }, function(e) {
		                  if (cbk) { cbk(false, e); }
		                });
		              };
		            } else {
		              requestSMSPermission();
		            }
		          }
		          if (typeof(sms) == 'object') {
		          	_sms.hasPermission(proceed, error);
		          }
		        };
		      	enable.SMS = function() {
		          if (!self.sms) { self.sms = {}; }
		          
		          function onMsg() {
		          }
		          function success(action, result, objAry) {
		            // #id = message id for delete
		            // #num = # of messages for restore
		            // true, ary = array for list
		            // t/f for intercept (on/Off)
		            // t/f for send message
		            // t/f for watch messages
		            
		            switch (action) {
		              case 'delete':
		                var idx = smsList.find(function(it) { return it._id == objAry._id; });
		                if (idx > -1) { smsList.splice(idx, 1); }
		                break;
		                
		              case 'onmsg':
		                smsList.push(result.data);
		                break;
		                
		              case 'list':
		                if (result) {
		                  for (var i in objAry) {
							  if (objAry.hasOwnProperty(i)) {
								smsList.push(objAry[i]);
							  }
		                  }
		                }
		                break;
		            }
		          }
		          function failed(err) {
		            console.log('Error:');
		            console.log(err);
		          }
		          
		          if (typeof(SMS) == 'object') {
		            self.sms.notify = onMsg;
		            self.sms.sendSms = function(sendto, msg) {
		              if(sendto.indexOf(";") >= 0) {
		                  sendto = sendto.split(";");
		                  for (var i in sendto) {
							  if (sendto.hasOwnProperty(i)) {
								sendto[i] = sendto[i].trim();
							  }
		                  }
		              }
		              SMS.sendSMS(sendto, msg, function() {
		                success('send', true);
		              }, failed);
		            };
		            self.sms.listSms = function(filter) {
		              SMS.listSMS(filter || {}, function(data) {
		                success('list', Array.isArray(data), data);
		              }, failed);
		            };
		            self.sms.deleteSms = function(ary) {
		              ary.forEach(function(sms) {
		                SMS.deleteSMS({_id: sms["_id"]}, function(id) {		// jshint ignore:line
		                  success('delete', id, sms);
		                }, failed);
		              });
		            };
		            self.sms.startWatch = function() {
		              SMS.startWatch(function() {
		                success('watch', true);
		              }, failed);
		            };
		            self.sms.stopWatch = function() {
		              SMS.stopWatch(function() {
		                success('watch', false);
		              }, failed);
		            };
		            self.sms.enableIntercept = function(blOnOff) {
		              if (blOnOff) {
		                smsList.length = 0;
		              }
		              SMS.enableIntercept(blOnOff, function() {
		                success('intercept', blOnOff);
		              }, failed);
		            };
		            self.sms.restoreSms = function() {
		              smsList.length = 0;
		              SMS.restoreSMS(smsList, function(num) {
		                success('restore', num);
		              }, failed);
		            };
		            self.sms.setOptions = function(options) {	// jshint ignore:line
		            };
		            document.addEventListener('onSMSArrive', function(e) {
		              success('onmsg', e);
					});
		          }
		        };
		        var _notify = {
		          	vibrate: function(dur) {
		              if (navigator.notification.vibrate) { navigator.notification.vibrate(dur); }
		            },
		          	beep: function(times) {
		              if (navigator.notification.beep) { navigator.notification.beep(times); }
		            },
		            alert: function(msg, cllbk, title, button) {
		              if (navigator.notification.alert) { navigator.notification.alert(msg, cllbk, title, button); }
		            },
		            confirm: function(msg, cllbk, title, button) {
		              if (navigator.notification.confirm) { navigator.notification.confirm(msg, cllbk, title, button); }
		            }
		        };
		        enable.notify = function() {
					checkPermission(permissions.POST_NOTIFICATIONS, function() {
					  self.notify = Object.assign(self.notify, _notify);
					}, {type: 'notify', methods: Object.keys(_notify)});
				};
		      	self.init = function(parms) {
		          if (typeof(cordova) == 'undefined') { return; }
		          
		          _cfg = parms;
		          var plgn = _cfg.plugins || [];
				  
		          // Global Phone Listener/Callback.
		          // parms = {
		          //     plugins: ['sms', 'contact', 'notify'],
		          //     notify: function(result, data) {}
		          // }
		          //
				  // List of plugins to enable.
				  // parms.plugins = ['sms', 'contact', 'notify']
				  // check and enable permissions for each plugin group.
				  plgn.forEach(function(itm) {
					  if (enable && enable[itm] && (typeof(self[itm]) == 'undefined' ||
		                  typeof(self[itm]._status) == 'undefined')) { enable[itm](); }
				  });
				  
				};
		      	self.destroy = function() {
		          if (SMS) {
		            if (_cfg.watch) {
		              SMS.stopWatch(function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_SUCCESS); }
		              }, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_ERROR); }
		              });
		            }
		            
		            if (_cfg.intercept) {
		              SMS.enableIntercept(false, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_SUCCESS); }
		              }, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_ERROR); }
		              });
		              SMS.restoreSMS(smsList, function( n ) {
		                smsList.length = 0;
		                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_SUCCESS, n); }
		              }, function(err) {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_ERROR, err); }
		              });
		            }
		          }
		        };
		      	// Phone Diagnostic Method.
		        // --------------------------
		      	self.diagnose = function(dlg, ctrl) {
		          if (typeof(cordova) == 'undefined') { return; }
		          var info = '', cnt = 0;
		          
		          function log(out) {
		            if (dlg && ctrl && $f.type(dlg, ctrl) == 'textarea') {
		              cnt++;
		              out = (typeof(out) != 'string') ? JSON.stringify(out) : out;
		              info += out + '\n';
		              
		              $f.text(dlg, ctrl, info);
		            } else {
		              console.log(out);
		            }
		          }
		          
		          // All generic mobile information.
		          //
		          log('\nDEVICE:');
		          ['cordova', 'model', 'platform', 'uuid',
		           'version', 'serial', 'manufacturer'].forEach(function(it) {
		          	log(it + ' = ' + self.device.get(it));
		          });
		          
		          log('\nAGENT:');
		          log(self.Agent());
		          
		          log('\nVENDOR:');
		          log(self.Vendor());
		          
				  log('\nLIST OF PLUGINS:');
				  log(self.PluginList());
				  log('\n');
				  
		          if (self.orientation) {
		            log('\nORIENTATION:');
		            log(self.orientation.get());
		          }
		          
		          if (self.network) {
		            log('\nNETWORK:');
		            self.network.update();
		            log('Network Connection = ' + self.network.get());
		          }
		          
		          if (self.battery) {
		            log('\nBATTERY:');
		            log(self.battery.get());
		          }
		          
		          if (self.compass) {
		            self.compass.getHeading(function(result, data) {
		            	log('\nCOMPASS:');
		            	log(data);
		            });
		          }
		          
		          if (self.motion) {
		            self.motion.getMotion(function(result, data) {
		               	log('\nMOTION:');
		           		log(data);
		            });
		          }
		          
		          if (self.globalize) {
		            log('\nGLOBALIZE:');
		            log('Language = ' + self.globalize.getLanguage());
		            log('LocaleName = ' + self.globalize.getLocaleName());
		          }
		        
		          if (self.statusbar) {
		            log('\nSTATUSBAR:');
		            log(self.statusbar.get());
		          }
		          
		          if (self.vibrate) {
		            log('\nVIBRATE:');
		            log('Vibrate 2 second(s).');
		            self.vibrate.play(2000);
		          }
		          
		          if (self.files) {
		            log('\nFILES:');
		            ['app', 'store', 'temp', 'cache', 'docs', 'shared', 'sync'].forEach(function(itm) {
		              log(' - file.path(' + itm + ') = "' + self.files.path(itm) + '"');
		            });
		            // Write, Read, List, Exists, Delete
		            log('\n1. Write test file "test.txt".');
		            self.files.write('./test.txt', 'This is a test ' + (new Date()).Format('#MM#-#DD#-#YYYY# #hh#:#mm# #AMPM#'), function(msg, res) {
		            if (res) {
		              log('2. Check for wrong file "test.png".');
		              self.files.exists('./test.png', function(msg, res) {
		                if (!res) {
		                  log('3. Test for correct file "test.txt".');
		                  self.files.exists('./test.txt', function(msg, res) {
		                    if (res) {
		                      log('4. Read test file.');
		                      self.files.read('./test.txt', function(msg, res) {
		                        log('\nFILE CONTENT:');
		                        log(res);
		                        
		                        log('\n5. Delete file.');
		                        self.files.delete('./test.txt', function(msg, res) {
		                          if (res) {
		                            log('6. Verify deleted file.');
		                            self.files.exists('./test.txt', function(msg, res) {
		                              if (!res) {
		                                log('\nFILE DELETED! File I/O test completed!');
		                              }
		                            });
		                          }
		                        });
		                      });
		                    }
		                  });
		                }
		              });
		            }
		          });
		          }
		          
		          if (self.geo) {
		            self.geo.get(null, function(result, data) {
		              log('\nGEO:');
		              log({result: result, data: data});
		            });
		          }
		          
		          if (self.media) {
		            log('\nMEDIA:');
		            var media = self.media.init(Env.domain() + '/media/drums.mp3', function(msg, res) {
		              if (res && media) {
		                log('Playing drums.mp3');
		                self.media.play(media);
		              }
		            });
		          }
		          
		          if (self.notify) {
		            log('\nNOTIFY:');
		            log('Vibrate for 2 secs.');
		            self.notify.vibrate(2);
		            log('Test notification alert.');
		            self.notify.alert('You are a winner', function() {
		              log('Alert has dismissed.');
		            }, "Confirm:", 'Close');
		            log('Test notification confirmation.');
		            self.notify.confirm('Did this popup work?', function(idx) {
		              log('Button ' + idx + ' was pressed.');
		            }, "Confirm:", ['Yes', 'No']);
		          }
		          
		          if (self.gallery) {
		            self.gallery.getLibrary(null, function(result) {
		                log('\nGALLERY:');
		                log(' Gallery getLibrary:');
		              	var lib = result.library || [];
		              
		              	lib.forEach(function(itm) {
		                  log(itm);
		                });
		            });
		          }
		          
		          if (self.camera) {
		            log('\nCAMERA:');
		            log(' Camera Enabled: ' + self.camera._status);
		          }
		      
		          // Sms
		        };
		      
				// Attach Phone Features when Device is Ready.
				function onDeviceReady() {
		          // Attach files, vibrate, battery, network & device
		          // by default.
		          if (typeof(cordova) != 'undefined') {
		            enable.files();
		            enable.vibrate();
		            enable.battery();
		            enable.network();
		            if (window.device && device.cordova) { enable.device(); }
		          }
				}
				document.addEventListener("deviceready", onDeviceReady, false);
			};
			
		  	Phone.prototype.type = function () {
				return "Phone";
			};
			Phone.prototype.toDto = function () {
				return { };
			};
			return Phone;
		});
		/* Repo Component Manager/Factory :
		   
		*/
		FACTORY.Register("Repository", function RepoFactory() {
			var Repo = function (config) {
				var self = this;
				var _data = {};
		      
				self.get = function(name) {
		          return _data[name] || null;
				};
				self.set = function(name, dat) {
		          if (dat) {
		            _data[name] = dat;
		          }
				};
		      	self.exists = function(name) {
		          return _data[name] ? true : false;
		        };
				self.delete = function(name) {
		          delete _data[name];
				};
			};
			Repo.prototype.type = function () {
				return "Repo";
			};
			Repo.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Repo;
		});
		
		/* REST Component Manager/Factory :
		   
		*/
		FACTORY.Register("Rest", function blankFactory() {
			var restObj = function () {
				var self = this;
				var $string = $fctry.new('Strings'), $config;
				if (typeof(Env) == 'undefined') {
					if (FACTORY.Exists('Env')) {
						Env = FACTORY.New('Env');
					} else {
						Env = {
							state: ""
						};
					}
				}
				function resolveServer(env, url) {
					if (env && env.state) {
						if (window.$nim && $nim.home_server) {
							url = $string.replaceAll($nim.home_server, env.domain() + "/", url);
							url = $string.replaceAll($nim.core_server, env.domain() + "/", url);
						}
						/* if ($config) {
							url = $string.replaceAll($config.domain(), env.domain(), url);
						} */
						return url;
					} else { return url; }
				}
				function ajaxCMD(type, url, blASync, payload, callbk) {
					var xhr  = new XMLHttpRequest();
					var json = null;
					if (type == "POST") {
		              if (payload instanceof FormData) {
		                json = payload;
		              } else {
		                json = (typeof(payload) == 'object') ? JSON.stringify(payload) : payload;
		              }
					} else { 
						if (typeof(payload) == 'function') { callbk = payload; payload = null; }
					}
					xhr.onerror = function() {
						if (callbk) { callbk ('error'); }
					};
					xhr.onreadystatechange = function () {
						var resp;
						
						if (xhr.readyState < 4) { return; }
						if (xhr.readyState == 4 && xhr.status == 200) {
							try {
								resp = JSON.parse(xhr.responseText);
							} catch (err) {
								resp = xhr.responseText || {};
							} finally {
								if (callbk) { callbk ('ok', resp); }
							}
						}
					};
					xhr.open(type, resolveServer(Env, url), blASync);
					if (type == "POST" && typeof(json) == 'string') {
						xhr.setRequestHeader('Content-Type','application/json');
					}
					try {
						xhr.send(json);
					} catch(err) {
						console.log(err);
					}
				}
				function restJson(inval) {
					var ary = inval.split(':');
					ary.shift();
					return JSON.parse(ary.join(':') || "") || {};
				}
		      	function _post(url, payload, callbk) {
					ajaxCMD('POST', url, true, payload, callbk);
		        }
		        function _get(url, callbk) {
					ajaxCMD('GET', url, true, null, callbk);
		        }
		      	function cleanPayload(payload) {
		          ['news','video','home','code','bookmark',
		          'version','svr','app','sessid','pubid'].forEach(function(it) {
		            delete payload[it];
		          });
		          return payload;
		        }
		      	function authPayload(url, payload) {
		          if (url.toLowerCase().indexOf('nimble-ide.com') > -1) {
		          	payload = cleanPayload(payload);
		            return Object.assign(payload, {
		              version: 2.0,
		              svr: 'home',
		              app: USER.acct ? USER.acct.app : '',
		              pubid: USER.acct ? USER.acct.pubid : '',
		              sessid: USER.acct ? USER.acct.sessid : ''
		            });
		          } return payload;
		        }
		      
		        self.get = _get;
		        self.post = _post;
		      	self.auth = authPayload;
		        self.restJson = restJson;
				
				self.onload = function(main) {
				  // Save any needed shared factories.
				  $config = (main.$config) ? main.$config : $fctry.new('Config');
		        };
			};
		  
			restObj.prototype.type = function () {
				return "rest";
			};
			restObj.prototype.toDto = function () {
				return { };
			};
			return restObj;
		});
		
		/* TRANSITION Component Manager/Factory :
		   
		*/
		FACTORY.Register("Transition", function TransitionFactory() {
			var transition = function (config) {
				var self = this;
				self.msg = function(to, title, msg, duration) {
		          var curform = $me.target();
		          
		          $f.load('frmmsg');
		          $f.caption('frmmsg', 'msgtitle', title);
		          $f.caption('frmmsg', 'msginfo', msg);
		          $f.switch(curform, 'frmmsg', true, true);
		          
		          setTimeout(function() {
		            $f.switch('frmmsg', to, true, true);
		          }, duration);
				};
		      
		      	self.andCall = function(title, msg, duration, fn) {
		          var curform = $me.target();
		          
		          $f.load('frmmsg');
		          $f.caption('frmmsg', 'msgtitle', title);
		          $f.caption('frmmsg', 'msginfo', msg);
		          $f.switch(curform, 'frmmsg', true, true);
		          
		          setTimeout(function() {
		            if (fn) fn();
		          }, duration);
		        };
			};
			transition.prototype.type = function () {
				return "Transition";
			};
			transition.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return transition;
		});
			
	},
	Logon: function(instID) {
	 
	},
	Logoff: function(instID) {
	 
	},
	EndApp: function(instID) {
	 
	},
	StartApp: function(pos) {
	    try {
	        $k.enabled = false;
	        if (typeof($k.fluidDesktop) == "undefined") { DESKTOP.fluidDesktop = globals.fluidDesktop; }
	        if (typeof($k.desktop) == "undefined") { $k.desktop = false; }
	        $k.setuplogo();
	 
	        App.Code.RegisterFactories();
	        if ($fctry.exists("Main")) { Main = $fctry.new("Main"); }
	        else if ($fctry.exists("Events")) { AppEvents = $fctry.new("Events"); }
	 
	        /* This function is called before your Startup Dialog is shown. 
	           The KERNEL is disabled until the Startup Dialog is displayed. 
			     You CAN NOT manually display dialog(s) here. */
	    }
	    catch (err) {
	        if ($k.errhandler) {
	            $k.errhandler(err, null);
	        }
	    }
	    finally {
	        $k.enabled = true;
	    }
	    return pos;
	}
	
};
$k.wrapallfunctions($heap.login.Code);
 
/** 
 * Create ALL Dialog Instances -------------------------
 **/
 
/** Form Template --------------------------------------
 *  NAME: applanding
 *
 * version: 5.0
 **/
$heap.login['applanding'] = { };
$heap.login['applanding'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'applanding';
			if (!$heap.login[pos.form]) { pos.form = 'applanding'; }
			
			$k.instance.newform(pos.form, App.Dialog['applanding']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'applanding'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('applanding',pos.left,pos.top,480,640,styles);
			$f.hide('applanding');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('applanding','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('applanding','', styles);
			
			
			$f.add('applanding','lbtitle','label','','0','0','105','26');
				props = [{"name":"disabled","value":false},{"name":"form","value":"applanding"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Landing Page"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('applanding','lbtitle', props);
				styles = [{"name":"color","value":"var(--color600)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('applanding','lbtitle', styles);
			$f.add('applanding','content','div','','0','0','120','555');
				props = [{"name":"disabled","value":false},{"name":"form","value":"applanding"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('applanding','content', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"calc(100% - 32px)"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"0px 0px 0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"overflow-y","value":"auto"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('applanding','content', styles);
			$f.add($f.getinstname('applanding','content'),'label1','label-right','','0','0','440','42');
				props = [{"name":"disabled","value":false},{"name":"form","value":"applanding"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login successful!"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('applanding','label1', props);
				styles = [{"name":"color","value":"var(--color600)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"30px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.top","value":"calc(50% - 20px)"},{"name":"div.width","value":"auto"}];
				$f.setstyle('applanding','label1', styles);
			options = 'media/img_missing.png';
			$f.add('applanding','icnhome','icon',options,'431','18','32','32');
				props = [{"name":"disabled","value":false},{"name":"form","value":"applanding"},{"name":"dock","value":"RRRR"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-user-circle-o"},{"name":"image.title","value":"Your profile."}];
				$f.setprop('applanding','icnhome', props);
				styles = [{"name":"color","value":"var(--color600)"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"z-index","value":"10"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"white"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('applanding','icnhome', styles);
			$f.setprop('applanding','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('applanding').enabled ) { $f.model('applanding').create('applanding'); }
			$nim.React.build('applanding');
			$f.refresh('applanding');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'applanding'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('applanding', itm[0], itm[1], $nim.fn.findEvent('login', 'applanding', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['applanding'].isLoaded = 1;
				App.Dialog['applanding'].isActivated = 0;
				$f.hide('applanding');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'applanding'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('applanding','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('applanding','', props);
					styles = [{"name":"body.background-color","value":"white"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"20px 20px 20px 20px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('applanding','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('applanding', itm.name); }
					});
				
					$f.events('applanding', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('applanding','','forceshow').toLowerCase() == 'true') $heap.login['applanding'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('applanding');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'applanding'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('applanding', 'Activate')(instID, instID.resolveName());
			App.Dialog['applanding'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('applanding');
		try {
			if ($k.islastform('applanding')) { $k.app.unloadwidget('applanding'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('applanding', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'applanding'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('applanding', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('applanding');
			if (App) {
				var dlgItem = App.Dialog['applanding'], 
					dlgCount = App.Dialog['applanding'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'applanding'}});
			}
		}
		finally {
			App.Dialog['applanding'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('applanding');
			blCancel = $f.events('applanding', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('applanding');
			$k.instance.restore();
			$f.events('applanding', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'applanding'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("applanding");
				App.Dialog['applanding'].isLoaded = 0;
				App.Dialog['applanding'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('applanding');
			if ($k.isformloaded('applanding') == false) {
				retval = $f.events('applanding', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("applanding");
			
			// Pull DataModel. 
			$k.instance.save('applanding');
			if ($f.model('applanding').enabled) { $f.model('applanding').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'applanding'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['applanding'].isActivated) {
				$f.events('applanding', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['applanding'].Code, 'applanding');
 
/** Form Template --------------------------------------
 *  NAME: loginforgot
 *
 * version: 5.0
 **/
$heap.login['loginforgot'] = { };
$heap.login['loginforgot'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginforgot';
			if (!$heap.login[pos.form]) { pos.form = 'loginforgot'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginforgot']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginforgot'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginforgot',pos.left,pos.top,480,640,styles);
			$f.hide('loginforgot');
				props = [{"name":"event-activate","value":"login.forgot.onactivate"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginforgot','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginforgot','', styles);
			
			
			$f.add('loginforgot','lbspace1','label-right','','0','0','105','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lbspace1', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 180px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lbspace1', styles);
			$f.add('loginforgot','lblogin5','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lblogin5', props);
				styles = [{"name":"color","value":"var(--color50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"30px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -50px 15px -50px"},{"name":"div.padding","value":"0px 0px 0px 50px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lblogin5', styles);
			$f.add('loginforgot','lblogin2','label','','0','0','105','74');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Enter the email address associated with the account."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lblogin2', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 4px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lblogin2', styles);
			options = 'media/img_missing.png';
			$f.add('loginforgot','icnmail','icon',options,'0','0','16','16');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-envelope"},{"name":"image.title","value":"envelope"}];
				$f.setprop('loginforgot','icnmail', props);
				styles = [{"name":"color","value":"var(--color500)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"--var(color500)"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"16px"}];
				$f.setstyle('loginforgot','icnmail', styles);
			$f.add('loginforgot','lbemail','label','','0','0','273','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lbemail', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 10px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.vertical-align","value":"middle"}];
				$f.setstyle('loginforgot','lbemail', styles);
			$f.add('loginforgot','email','textbox','','0','0','273','42');
				props = [{"name":"event-change","value":"login.forgot.email.onchange"},{"name":"event-keyup","value":"login.forgot.email.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Email"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginforgot','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"8px 8px 40px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','email', styles);
			$f.add('loginforgot','btnsave','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.forgot.reset.click"},{"name":"disabled","value":true},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Request Code"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginforgot','btnsave', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2.5px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','btnsave', styles);
			$f.add('loginforgot','btncancel','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.forgot.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginforgot','btncancel', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 2.5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','btncancel', styles);
			$f.setprop('loginforgot','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginforgot').enabled ) { $f.model('loginforgot').create('loginforgot'); }
			$nim.React.build('loginforgot');
			$f.refresh('loginforgot');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginforgot'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['email', 'onchange', 'login.forgot.email.onchange'],['email', 'onkeyup', 'login.forgot.email.keyup'],
					['btnsave', 'onclick', 'login.forgot.reset.click'],['btncancel', 'onclick', 'login.forgot.cancel.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginforgot', itm[0], itm[1], $nim.fn.findEvent('login', 'loginforgot', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginforgot'].isLoaded = 1;
				App.Dialog['loginforgot'].isActivated = 0;
				$f.hide('loginforgot');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginforgot'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginforgot','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginforgot','', props);
					styles = [{"name":"body.background-color","value":"white"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"50px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginforgot','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginforgot', itm.name); }
					});
				
					$f.events('loginforgot', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginforgot','','forceshow').toLowerCase() == 'true') $heap.login['loginforgot'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginforgot');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginforgot', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginforgot'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginforgot');
		try {
			if ($k.islastform('loginforgot')) { $k.app.unloadwidget('loginforgot'); }
			
			var itm, evtArr = [
					['email', 'onchange'],['email', 'onkeyup'],
				['btnsave', 'onclick'],['btncancel', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginforgot', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginforgot', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginforgot');
			if (App) {
				var dlgItem = App.Dialog['loginforgot'], 
					dlgCount = App.Dialog['loginforgot'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginforgot'}});
			}
		}
		finally {
			App.Dialog['loginforgot'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginforgot');
			blCancel = $f.events('loginforgot', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginforgot');
			$k.instance.restore();
			$f.events('loginforgot', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginforgot");
				App.Dialog['loginforgot'].isLoaded = 0;
				App.Dialog['loginforgot'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginforgot');
			if ($k.isformloaded('loginforgot') == false) {
				retval = $f.events('loginforgot', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginforgot");
			
			// Pull DataModel. 
			$k.instance.save('loginforgot');
			if ($f.model('loginforgot').enabled) { $f.model('loginforgot').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginforgot'].isActivated) {
				$f.events('loginforgot', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginforgot'].Code, 'loginforgot');
 
/** Form Template --------------------------------------
 *  NAME: loginmain
 *
 * version: 5.0
 **/
$heap.login['loginmain'] = { };
$heap.login['loginmain'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginmain';
			if (!$heap.login[pos.form]) { pos.form = 'loginmain'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginmain']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginmain'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginmain',pos.left,pos.top,480,640,styles);
			$f.hide('loginmain');
				props = [{"name":"event-activate","value":"login.main.onactivate"},{"name":"event-load","value":"login.main.onload"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginmain','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginmain','', styles);
			
			
			$f.add('loginmain','lbspace1','label-right','','0','0','372','40');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbspace1', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 240px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lbspace1', styles);
			options = 'media/bulb-explode.jpg';
			$f.add('loginmain','logo','imagex',options,'0','0','150','146');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmain','logo', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"50%"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"middle"},{"name":"div.border","value":"8px rgba(34,68,136,0.80) double"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 10px calc(50% - 75px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','logo', styles);
			$f.add('loginmain','bar3','label','','0','0','467','2');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','bar3', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color900)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"opacity","value":"0.5"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"20px -50px 0px -50px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginmain','bar3', styles);
			$f.add('loginmain','lbdiv','label','','0','0','380','50');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbdiv', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginmain','lbdiv', styles);
			options = 'media/img_missing.png';
			$f.add('loginmain','icon1','icon',options,'0','0','22','22');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-envelope"},{"name":"image.title","value":"envelope"}];
				$f.setprop('loginmain','icon1', props);
				styles = [{"name":"color","value":"#224488"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"16px"}];
				$f.setstyle('loginmain','icon1', styles);
			$f.add('loginmain','lblogin','label','','0','0','332','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email or Login"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lblogin', props);
				styles = [{"name":"color","value":"#202020"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginmain','lblogin', styles);
			$f.add('loginmain','username','textbox','','0','0','372','42');
				props = [{"name":"event-change","value":"login.main.username.onchange"},{"name":"event-keyup","value":"login.main.username.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Email or Login"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','username', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 20px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','username', styles);
			options = 'media/img_missing.png';
			$f.add('loginmain','icon2','icon',options,'0','0','22','22');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-lock"},{"name":"image.title","value":"lock"}];
				$f.setprop('loginmain','icon2', props);
				styles = [{"name":"color","value":"#224488"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('loginmain','icon2', styles);
			$f.add('loginmain','lbpw','label','','0','0','332','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbpw', props);
				styles = [{"name":"color","value":"#031524"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginmain','lbpw', styles);
			$f.add('loginmain','password','textbox','','0','0','105','42');
				props = [{"name":"event-change","value":"login.main.username.onchange"},{"name":"event-enterkey","value":"login.main.login.click"},{"name":"event-keyup","value":"login.main.username.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Password"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','password', styles);
			$f.add('loginmain','lbforgot1','label','','0','0','190','18');
				props = [{"name":"event-click","value":"login.main.forgot.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot my password."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbforgot1', props);
				styles = [{"name":"color","value":"#224488"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"top"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"50%"}];
				$f.setstyle('loginmain','lbforgot1', styles);
			$f.add('loginmain','lbreset','label-right','','0','0','180','18');
				props = [{"name":"event-click","value":"login.main.reset.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Enter reset code"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbreset', props);
				styles = [{"name":"color","value":"#224488"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"top"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"right"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 10px 25px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(50% - 10px)"}];
				$f.setstyle('loginmain','lbreset', styles);
			$f.add('loginmain','btnnew','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.main.register.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','btnnew', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 10px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 5px 3px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','btnnew', styles);
			$f.add('loginmain','btnlogin','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.main.login.click"},{"name":"disabled","value":true},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','btnlogin', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 10px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 0px 3px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','btnlogin', styles);
			$f.add('loginmain','lbspace','label-right','','0','0','375','2');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbspace', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(40% - 15px)"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"3px 0px 3px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginmain','lbspace', styles);
			$f.setprop('loginmain','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginmain').enabled ) { $f.model('loginmain').create('loginmain'); }
			$nim.React.build('loginmain');
			$f.refresh('loginmain');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginmain'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['username', 'onchange', 'login.main.username.onchange'],['username', 'onkeyup', 'login.main.username.keyup'],
					['password', 'onchange', 'login.main.username.onchange'],['password', 'onenterkey', 'login.main.login.click'],['password', 'onkeyup', 'login.main.username.keyup'],['lbforgot1', 'onclick', 'login.main.forgot.click'],['lbreset', 'onclick', 'login.main.reset.click'],
					['btnnew', 'onclick', 'login.main.register.click'],['btnlogin', 'onclick', 'login.main.login.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginmain', itm[0], itm[1], $nim.fn.findEvent('login', 'loginmain', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginmain'].isLoaded = 1;
				App.Dialog['loginmain'].isActivated = 0;
				$f.hide('loginmain');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginmain'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginmain','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginmain','', props);
					styles = [{"name":"body.background-color","value":"white"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"40px 50px 50px 50px"},{"name":"body.text-align","value":"left"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginmain','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginmain', itm.name); }
					});
				
					$f.events('loginmain', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginmain','','forceshow').toLowerCase() == 'true') $heap.login['loginmain'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginmain');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginmain', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginmain'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginmain');
		try {
			if ($k.islastform('loginmain')) { $k.app.unloadwidget('loginmain'); }
			
			var itm, evtArr = [
					['username', 'onchange'],['username', 'onkeyup'],
				['password', 'onchange'],['password', 'onenterkey'],['password', 'onkeyup'],['lbforgot1', 'onclick'],['lbreset', 'onclick'],
				['btnnew', 'onclick'],['btnlogin', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginmain', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginmain', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginmain');
			if (App) {
				var dlgItem = App.Dialog['loginmain'], 
					dlgCount = App.Dialog['loginmain'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginmain'}});
			}
		}
		finally {
			App.Dialog['loginmain'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginmain');
			blCancel = $f.events('loginmain', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginmain');
			$k.instance.restore();
			$f.events('loginmain', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginmain");
				App.Dialog['loginmain'].isLoaded = 0;
				App.Dialog['loginmain'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginmain');
			if ($k.isformloaded('loginmain') == false) {
				retval = $f.events('loginmain', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginmain");
			
			// Pull DataModel. 
			$k.instance.save('loginmain');
			if ($f.model('loginmain').enabled) { $f.model('loginmain').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginmain'].isActivated) {
				$f.events('loginmain', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 

	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginmain'].Code, 'loginmain');
 
/** Form Template --------------------------------------
 *  NAME: loginmsg
 *
 * version: 5.0
 **/
$heap.login['loginmsg'] = { };
$heap.login['loginmsg'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginmsg';
			if (!$heap.login[pos.form]) { pos.form = 'loginmsg'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginmsg']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginmsg'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginmsg',pos.left,pos.top,480,640,styles);
			$f.hide('loginmsg');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginmsg','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"rgba(0,0,0,0.30)"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginmsg','', styles);
			
			
			$f.add('loginmsg','lbspace','label-right','','0','0','105','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','lbspace', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 170px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','lbspace', styles);
			$f.add('loginmsg','frame','div','','0','0','380','107');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmsg','frame', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color50)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"5px var(--color900) double"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(20,20,20,.85) 8px 8px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginmsg','frame', styles);
			$f.add($f.getinstname('loginmsg','frame'),'msgtitle','label','','0','0','380','63');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','msgtitle', props);
				styles = [{"name":"color","value":"var(--color50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"height","value":"63px"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"28px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -20px 4px -20px"},{"name":"div.padding","value":"0px 0px 0px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','msgtitle', styles);
			$f.add($f.getinstname('loginmsg','frame'),'msg','label-right','','0','0','360','140');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','msg', props);
				styles = [{"name":"color","value":"var(--color800)"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"20px"},{"name":"line-height","value":"49px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"20px 10px 10px 10px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','msg', styles);
			$f.add($f.getinstname('loginmsg','frame'),'btnok','button','','0','0','332','33');
				props = [{"name":"event-click","value":"login.msg.ok.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Ok"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmsg','btnok', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"100%"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','btnok', styles);
			$f.setprop('loginmsg','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginmsg').enabled ) { $f.model('loginmsg').create('loginmsg'); }
			$nim.React.build('loginmsg');
			$f.refresh('loginmsg');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginmsg'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnok', 'onclick', 'login.msg.ok.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginmsg', itm[0], itm[1], $nim.fn.findEvent('login', 'loginmsg', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginmsg'].isLoaded = 1;
				App.Dialog['loginmsg'].isActivated = 0;
				$f.hide('loginmsg');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginmsg'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginmsg','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginmsg','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"50px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginmsg','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginmsg', itm.name); }
					});
				
					$f.events('loginmsg', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginmsg','','forceshow').toLowerCase() == 'true') $heap.login['loginmsg'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginmsg');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginmsg', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginmsg'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginmsg');
		try {
			if ($k.islastform('loginmsg')) { $k.app.unloadwidget('loginmsg'); }
			
			var itm, evtArr = [
					['btnok', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginmsg', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginmsg', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginmsg');
			if (App) {
				var dlgItem = App.Dialog['loginmsg'], 
					dlgCount = App.Dialog['loginmsg'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginmsg'}});
			}
		}
		finally {
			App.Dialog['loginmsg'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginmsg');
			blCancel = $f.events('loginmsg', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginmsg');
			$k.instance.restore();
			$f.events('loginmsg', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginmsg");
				App.Dialog['loginmsg'].isLoaded = 0;
				App.Dialog['loginmsg'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginmsg');
			if ($k.isformloaded('loginmsg') == false) {
				retval = $f.events('loginmsg', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginmsg");
			
			// Pull DataModel. 
			$k.instance.save('loginmsg');
			if ($f.model('loginmsg').enabled) { $f.model('loginmsg').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginmsg'].isActivated) {
				$f.events('loginmsg', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginmsg'].Code, 'loginmsg');
 
/** Form Template --------------------------------------
 *  NAME: loginprofile
 *
 * version: 5.0
 **/
$heap.login['loginprofile'] = { };
$heap.login['loginprofile'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginprofile';
			if (!$heap.login[pos.form]) { pos.form = 'loginprofile'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginprofile']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginprofile'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginprofile',pos.left,pos.top,480,640,styles);
			$f.hide('loginprofile');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginprofile','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"var(--color50)"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginprofile','', styles);
			
			
			$f.add('loginprofile','lbtitle','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"User Profile"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lbtitle', props);
				styles = [{"name":"color","value":"var(--color50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"30px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -30px 15px -50px"},{"name":"div.padding","value":"0px 0px 0px 50px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lbtitle', styles);
			options = 'media/avatar-male.jpg';
			$f.add('loginprofile','img','imagex',options,'0','0','80','125');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','img', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"15px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.border-radius","value":"15px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,0.80) 10px 15px 15px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 10px 20px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','img', styles);
			options = 'media/img_missing.png';
			$f.add('loginprofile','editimg','icon',options,'0','0','25','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-edit"},{"name":"image.title","value":"check-square-o"}];
				$f.setprop('loginprofile','editimg', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"top"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"4px 4px 4px 4px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"25px"}];
				$f.setstyle('loginprofile','editimg', styles);
			$f.add('loginprofile','lblogin','label','','0','0','417','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login name"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lblogin', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 40px 4px 2px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lblogin', styles);
			$f.add('loginprofile','login','textbox','','0','0','362','42');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"login"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Login"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','login', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 8px 10px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"92%"}];
				$f.setstyle('loginprofile','login', styles);
			options = 'media/img_missing.png';
			$f.add('loginprofile','editlogin','icon',options,'0','0','23','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-edit"},{"name":"image.title","value":"check-square-o"}];
				$f.setprop('loginprofile','editlogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"23px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"14px 4px 4px -48px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"23px"}];
				$f.setstyle('loginprofile','editlogin', styles);
			$f.add('loginprofile','lblogin1','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lblogin1', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 40px 4px 2px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lblogin1', styles);
			$f.add('loginprofile','email','textbox','','0','0','384','42');
				props = [{"name":"disabled","value":true},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"email"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Email"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-color","value":"#bbb"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 8px 10px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"92%"}];
				$f.setstyle('loginprofile','email', styles);
			$f.add('loginprofile','lblogin2','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"First name"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lblogin2', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 40px 4px 2px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lblogin2', styles);
			$f.add('loginprofile','firstname','textbox','','0','0','384','42');
				props = [{"name":"disabled","value":true},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"firstname"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"First name"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','firstname', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-color","value":"#bbb"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 8px 10px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"92%"}];
				$f.setstyle('loginprofile','firstname', styles);
			options = 'media/img_missing.png';
			$f.add('loginprofile','editfirst','icon',options,'0','0','23','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-edit"},{"name":"image.title","value":"check-square-o"}];
				$f.setprop('loginprofile','editfirst', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"23px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"14px 4px 4px -48px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"23px"}];
				$f.setstyle('loginprofile','editfirst', styles);
			$f.add('loginprofile','lblogin5','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Last name"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lblogin5', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 40px 4px 2px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lblogin5', styles);
			$f.add('loginprofile','lastname','textbox','','0','0','384','42');
				props = [{"name":"disabled","value":true},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"lastname"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Last name"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','lastname', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-color","value":"#bbb"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 8px 10px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"92%"}];
				$f.setstyle('loginprofile','lastname', styles);
			options = 'media/img_missing.png';
			$f.add('loginprofile','editlast','icon',options,'0','0','23','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-edit"},{"name":"image.title","value":"check-square-o"}];
				$f.setprop('loginprofile','editlast', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"23px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"14px 4px 4px -48px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"23px"}];
				$f.setstyle('loginprofile','editlast', styles);
			$f.add('loginprofile','lblogin3','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Date of Birth"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprofile','lblogin3', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 40px 4px 2px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','lblogin3', styles);
			$f.add('loginprofile','dob','textbox','','0','0','384','42');
				props = [{"name":"disabled","value":true},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"dob"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"mm/dd/yyyy"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','dob', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-color","value":"#bbb"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 8px 10px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"92%"}];
				$f.setstyle('loginprofile','dob', styles);
			options = 'media/img_missing.png';
			$f.add('loginprofile','editdob','icon',options,'0','0','23','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-edit"},{"name":"image.title","value":"check-square-o"}];
				$f.setprop('loginprofile','editdob', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"23px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"14px 4px 4px -48px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"23px"}];
				$f.setstyle('loginprofile','editdob', styles);
			$f.add('loginprofile','frame1','div','','0','0','120','35');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginprofile','frame1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"4px 0px 4px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('loginprofile','frame1', styles);
			$f.add($f.getinstname('loginprofile','frame1'),'btnupdate','button','','0','0','181','33');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Update"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','btnupdate', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 20px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"10px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','btnupdate', styles);
			$f.add($f.getinstname('loginprofile','frame1'),'btncancel','button','','0','0','181','33');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprofile"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprofile','btncancel', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 20px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"10px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprofile','btncancel', styles);
			$f.setprop('loginprofile','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginprofile').enabled ) { $f.model('loginprofile').create('loginprofile'); }
			$nim.React.build('loginprofile');
			$f.refresh('loginprofile');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginprofile'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginprofile', itm[0], itm[1], $nim.fn.findEvent('login', 'loginprofile', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginprofile'].isLoaded = 1;
				App.Dialog['loginprofile'].isActivated = 0;
				$f.hide('loginprofile');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginprofile'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginprofile','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginprofile','', props);
					styles = [{"name":"body.background-color","value":"var(--color50)"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"35px 20px 30px 50px"},{"name":"body.text-align","value":"left"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginprofile','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginprofile', itm.name); }
					});
				
					$f.events('loginprofile', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginprofile','','forceshow').toLowerCase() == 'true') $heap.login['loginprofile'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginprofile');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginprofile'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginprofile', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginprofile'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginprofile');
		try {
			if ($k.islastform('loginprofile')) { $k.app.unloadwidget('loginprofile'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginprofile', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginprofile'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginprofile', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginprofile');
			if (App) {
				var dlgItem = App.Dialog['loginprofile'], 
					dlgCount = App.Dialog['loginprofile'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginprofile'}});
			}
		}
		finally {
			App.Dialog['loginprofile'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginprofile');
			blCancel = $f.events('loginprofile', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginprofile');
			$k.instance.restore();
			$f.events('loginprofile', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginprofile'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginprofile");
				App.Dialog['loginprofile'].isLoaded = 0;
				App.Dialog['loginprofile'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginprofile');
			if ($k.isformloaded('loginprofile') == false) {
				retval = $f.events('loginprofile', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginprofile");
			
			// Pull DataModel. 
			$k.instance.save('loginprofile');
			if ($f.model('loginprofile').enabled) { $f.model('loginprofile').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginprofile'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginprofile'].isActivated) {
				$f.events('loginprofile', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginprofile'].Code, 'loginprofile');
 
/** Form Template --------------------------------------
 *  NAME: loginregister
 *
 * version: 5.0
 **/
$heap.login['loginregister'] = { };
$heap.login['loginregister'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginregister';
			if (!$heap.login[pos.form]) { pos.form = 'loginregister'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginregister']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginregister'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginregister',pos.left,pos.top,480,640,styles);
			$f.hide('loginregister');
				props = [{"name":"event-activate","value":"login.register.onactivate"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginregister','', props);
				styles = [{"name":"color","value":"var(--color800)"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginregister','', styles);
			
			
			$f.add('loginregister','lbspace1','label-right','','0','0','105','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbspace1', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 250px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbspace1', styles);
			$f.add('loginregister','lbtitle','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New User"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbtitle', props);
				styles = [{"name":"color","value":"var(--colora50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"30px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -50px 40px -50px"},{"name":"div.padding","value":"0px 0px 0px 50px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbtitle', styles);
			$f.add('loginregister','lblogin','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login name"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lblogin', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 4px 4px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lblogin', styles);
			$f.add('loginregister','login','textbox','','0','0','302','42');
				props = [{"name":"event-change","value":"login.register.login.onchange"},{"name":"event-keyup","value":"login.register.login.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"login"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Login"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','login', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 20px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','login', styles);
			$f.add('loginregister','lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbemail', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 4px 4px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbemail', styles);
			$f.add('loginregister','email','textbox','','0','0','273','42');
				props = [{"name":"event-change","value":"login.register.login.onchange"},{"name":"event-keyup","value":"login.register.login.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"email"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Email"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 20px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','email', styles);
			$f.add('loginregister','lbpw','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbpw', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 4px 4px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbpw', styles);
			$f.add('loginregister','password','textbox','','0','0','273','42');
				props = [{"name":"event-change","value":"login.register.login.onchange"},{"name":"event-keyup","value":"login.register.login.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"password"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Password"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 20px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','password', styles);
			$f.add('loginregister','lbpw2','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbpw2', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 4px 4px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbpw2', styles);
			$f.add('loginregister','confirm','textbox','','0','0','273','42');
				props = [{"name":"event-change","value":"login.register.login.onchange"},{"name":"event-keyup","value":"login.register.login.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindid","value":"confirmpw"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Confirm password"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 30px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','confirm', styles);
			$f.add('loginregister','frame1','div','','0','0','380','41');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','frame1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"4px 4px 4px 4px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('loginregister','frame1', styles);
			$f.add($f.getinstname('loginregister','frame1'),'btnsave','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.register.register.click"},{"name":"disabled","value":true},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','btnsave', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"50%"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','btnsave', styles);
			$f.add($f.getinstname('loginregister','frame1'),'btncancel','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.register.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','btncancel', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 15px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','btncancel', styles);
			$f.setprop('loginregister','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginregister').enabled ) { $f.model('loginregister').create('loginregister'); }
			$nim.React.build('loginregister');
			$f.refresh('loginregister');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginregister'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['login', 'onchange', 'login.register.login.onchange'],['login', 'onkeyup', 'login.register.login.keyup'],
					['email', 'onchange', 'login.register.login.onchange'],['email', 'onkeyup', 'login.register.login.keyup'],['password', 'onchange', 'login.register.login.onchange'],['password', 'onkeyup', 'login.register.login.keyup'],['confirm', 'onchange', 'login.register.login.onchange'],
					['confirm', 'onkeyup', 'login.register.login.keyup'],['btnsave', 'onclick', 'login.register.register.click'],['btncancel', 'onclick', 'login.register.cancel.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginregister', itm[0], itm[1], $nim.fn.findEvent('login', 'loginregister', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginregister'].isLoaded = 1;
				App.Dialog['loginregister'].isActivated = 0;
				$f.hide('loginregister');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginregister'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginregister','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginregister','', props);
					styles = [{"name":"body.background-color","value":"white"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"30px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginregister','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginregister', itm.name); }
					});
				
					$f.events('loginregister', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginregister','','forceshow').toLowerCase() == 'true') $heap.login['loginregister'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginregister');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginregister', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginregister'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginregister');
		try {
			if ($k.islastform('loginregister')) { $k.app.unloadwidget('loginregister'); }
			
			var itm, evtArr = [
					['login', 'onchange'],['login', 'onkeyup'],
				['email', 'onchange'],['email', 'onkeyup'],['password', 'onchange'],['password', 'onkeyup'],['confirm', 'onchange'],
				['confirm', 'onkeyup'],['btnsave', 'onclick'],['btncancel', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginregister', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginregister', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginregister');
			if (App) {
				var dlgItem = App.Dialog['loginregister'], 
					dlgCount = App.Dialog['loginregister'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginregister'}});
			}
		}
		finally {
			App.Dialog['loginregister'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginregister');
			blCancel = $f.events('loginregister', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginregister');
			$k.instance.restore();
			$f.events('loginregister', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginregister");
				App.Dialog['loginregister'].isLoaded = 0;
				App.Dialog['loginregister'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginregister');
			if ($k.isformloaded('loginregister') == false) {
				retval = $f.events('loginregister', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginregister");
			
			// Pull DataModel. 
			$k.instance.save('loginregister');
			if ($f.model('loginregister').enabled) { $f.model('loginregister').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginregister'].isActivated) {
				$f.events('loginregister', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginregister'].Code, 'loginregister');
 
/** Form Template --------------------------------------
 *  NAME: loginsplash
 *
 * version: 5.0
 **/
$heap.login['loginsplash'] = { };
$heap.login['loginsplash'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginsplash';
			if (!$heap.login[pos.form]) { pos.form = 'loginsplash'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginsplash']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginsplash'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-5', top:'0', width:'459', height:'664'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginsplash',pos.left,pos.top,459,664,styles);
			$f.hide('loginsplash');
				props = [{"name":"event-activate","value":"login.splash.onactivate"},{"name":"event-load","value":"login.splash.onload"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginsplash','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#e0e0e0"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginsplash','', styles);
			
			
			$f.add('loginsplash','slogan','label-right','','20','629','409','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Made with Nimble"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','slogan', props);
				styles = [{"name":"color","value":"#707173"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"20px"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(100% - 25px)"},{"name":"div.width","value":"calc(100% - 40px)"}];
				$f.setstyle('loginsplash','slogan', styles);
			$f.add('loginsplash','custom1','div','','12','12','96','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(validate)"},{"name":"caption","value":""},{"name":"ctype","value":"validate"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginsplash','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"inline-block"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('loginsplash','custom1', styles);
			$f.hide('loginsplash','custom1');
			options = 'media/lightbulb.jpg';
			$f.add('loginsplash','image','imagex',options,'-4','157','465','203');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginsplash','image', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"middle"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.width","value":"calc(100% + 16px)"}];
				$f.setstyle('loginsplash','image', styles);
			$f.add('loginsplash','title','label-right','','195','230','250','39');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"YOUR COMPANY"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','title', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20pt"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('loginsplash','title', styles);
			$f.add('loginsplash','label2','label-right','','216','271','202','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"\"you slogan here...\""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','label2', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12pt"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('loginsplash','label2', styles);
			$f.add('loginsplash','bar','label','','-5','362','465','10');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','bar', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color900)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.width","value":"calc(100% + 16px)"}];
				$f.setstyle('loginsplash','bar', styles);
			$f.add('loginsplash','bar1','label','','-4','374','465','8');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','bar1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color900)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.width","value":"calc(100% + 16px)"}];
				$f.setstyle('loginsplash','bar1', styles);
			$f.add('loginsplash','bar2','label','','-5','383','465','4');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','bar2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color900)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.width","value":"calc(100% + 16px)"}];
				$f.setstyle('loginsplash','bar2', styles);
			$f.add('loginsplash','bar3','label','','-5','389','465','2');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginsplash"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginsplash','bar3', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color900)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.width","value":"calc(100% + 16px)"}];
				$f.setstyle('loginsplash','bar3', styles);
			$f.setprop('loginsplash','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginsplash').enabled ) { $f.model('loginsplash').create('loginsplash'); }
			$nim.React.build('loginsplash');
			$f.refresh('loginsplash');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginsplash'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginsplash', itm[0], itm[1], $nim.fn.findEvent('login', 'loginsplash', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginsplash'].isLoaded = 1;
				App.Dialog['loginsplash'].isActivated = 0;
				$f.hide('loginsplash');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginsplash'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginsplash','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginsplash','', props);
					styles = [{"name":"body.background-color","value":"#e0e0e0"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"hidden"},{"name":"body.padding","value":"20px 20px 20px 20px"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginsplash','', styles);
					
					var ctrls = [{"widget":false,"name":"custom1"}];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginsplash', itm.name); }
					});
				
					$f.events('loginsplash', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginsplash','','forceshow').toLowerCase() == 'true') $heap.login['loginsplash'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginsplash');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginsplash'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginsplash', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginsplash'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginsplash');
		try {
			if ($k.islastform('loginsplash')) { $k.app.unloadwidget('loginsplash'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginsplash', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginsplash'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginsplash', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginsplash');
			if (App) {
				var dlgItem = App.Dialog['loginsplash'], 
					dlgCount = App.Dialog['loginsplash'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginsplash'}});
			}
		}
		finally {
			App.Dialog['loginsplash'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginsplash');
			blCancel = $f.events('loginsplash', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginsplash');
			$k.instance.restore();
			$f.events('loginsplash', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginsplash'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginsplash");
				App.Dialog['loginsplash'].isLoaded = 0;
				App.Dialog['loginsplash'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginsplash');
			if ($k.isformloaded('loginsplash') == false) {
				retval = $f.events('loginsplash', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginsplash");
			
			// Pull DataModel. 
			$k.instance.save('loginsplash');
			if ($f.model('loginsplash').enabled) { $f.model('loginsplash').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginsplash'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginsplash'].isActivated) {
				$f.events('loginsplash', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 

	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginsplash'].Code, 'loginsplash');
 
/** Form Template --------------------------------------
 *  NAME: loginreset
 *
 * version: 5.0
 **/
$heap.login['loginreset'] = { };
$heap.login['loginreset'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginreset';
			if (!$heap.login[pos.form]) { pos.form = 'loginreset'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginreset']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginreset'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginreset',pos.left,pos.top,480,640,styles);
			$f.hide('loginreset');
				props = [{"name":"event-activate","value":"login.reset.onactivate"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginreset','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginreset','', styles);
			
			
			$f.add('loginreset','lbspace1','label-right','','0','0','412','50');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbspace1', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 240px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','lbspace1', styles);
			$f.add('loginreset','lbtitle','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Reset Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbtitle', props);
				styles = [{"name":"color","value":"var(--colora50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"30px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -50px 15px -50px"},{"name":"div.padding","value":"0px 0px 0px 50px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','lbtitle', styles);
			$f.add('loginreset','lbdiv','label','','0','0','412','19');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbdiv', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginreset','lbdiv', styles);
			options = 'media/img_missing.png';
			$f.add('loginreset','icnemail','icon',options,'0','0','22','22');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-envelope"},{"name":"image.title","value":"envelope"}];
				$f.setprop('loginreset','icnemail', props);
				styles = [{"name":"color","value":"var(--color700)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"var(--color700)"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"16px"}];
				$f.setstyle('loginreset','icnemail', styles);
			$f.add('loginreset','lblogin','label','','0','0','392','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lblogin', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginreset','lblogin', styles);
			$f.add('loginreset','email','textbox','','0','0','392','42');
				props = [{"name":"event-change","value":"login.reset.email.onchange"},{"name":"event-keyup","value":"login.reset.email.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Email"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','email', styles);
			options = 'media/img_missing.png';
			$f.add('loginreset','icon2','icon',options,'0','0','20','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-lock"},{"name":"image.title","value":"lock"}];
				$f.setprop('loginreset','icon2', props);
				styles = [{"name":"color","value":"var(--color700)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"var(--color700)"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('loginreset','icon2', styles);
			$f.add('loginreset','lbpw','label','','0','0','392','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbpw', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginreset','lbpw', styles);
			$f.add('loginreset','newpw','textbox','','0','0','392','42');
				props = [{"name":"event-change","value":"login.reset.email.onchange"},{"name":"event-keyup","value":"login.reset.email.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Password"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','newpw', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','newpw', styles);
			options = 'media/img_missing.png';
			$f.add('loginreset','icon3','icon',options,'0','0','20','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-lock"},{"name":"image.title","value":"lock"}];
				$f.setprop('loginreset','icon3', props);
				styles = [{"name":"color","value":"var(--color700)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"var(--color700)"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('loginreset','icon3', styles);
			$f.add('loginreset','lblogin1','label','','0','0','372','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lblogin1', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginreset','lblogin1', styles);
			$f.add('loginreset','confirm','textbox','','0','0','372','42');
				props = [{"name":"event-change","value":"login.reset.email.onchange"},{"name":"event-keyup","value":"login.reset.email.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Confirm"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','confirm', styles);
			options = 'media/img_missing.png';
			$f.add('loginreset','icon','icon',options,'0','0','20','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-hashtag"},{"name":"image.title","value":"envelope"}];
				$f.setprop('loginreset','icon', props);
				styles = [{"name":"color","value":"var(--color700)"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"var(--color700)"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('loginreset','icon', styles);
			$f.add('loginreset','lblogin2','label','','0','0','332','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Authorization Code"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lblogin2', props);
				styles = [{"name":"color","value":"#222222"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"16px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"5px 0px 4px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"calc(100% - 48px)"}];
				$f.setstyle('loginreset','lblogin2', styles);
			$f.add('loginreset','token','textbox','','0','0','372','42');
				props = [{"name":"event-change","value":"login.reset.email.onchange"},{"name":"event-keyup","value":"login.reset.email.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Security Token"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','token', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"11px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"6px 8px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','token', styles);
			$f.add('loginreset','lbspace','label-right','','0','0','362','2');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbspace', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(40% - 15px)"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"3px 0px 3px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginreset','lbspace', styles);
			$f.add('loginreset','btnvalidate','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.reset.update.click"},{"name":"disabled","value":true},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Reset Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','btnvalidate', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 10px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 5px 3px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','btnvalidate', styles);
			$f.add('loginreset','btncancel','button','','0','0','2','33');
				props = [{"name":"event-click","value":"login.reset.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','btncancel', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 15px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 0px 3px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','btncancel', styles);
			$f.setprop('loginreset','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginreset').enabled ) { $f.model('loginreset').create('loginreset'); }
			$nim.React.build('loginreset');
			$f.refresh('loginreset');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginreset'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['email', 'onchange', 'login.reset.email.onchange'],['email', 'onkeyup', 'login.reset.email.keyup'],
					['newpw', 'onchange', 'login.reset.email.onchange'],['newpw', 'onkeyup', 'login.reset.email.keyup'],['confirm', 'onchange', 'login.reset.email.onchange'],['confirm', 'onkeyup', 'login.reset.email.keyup'],['token', 'onchange', 'login.reset.email.onchange'],
					['token', 'onkeyup', 'login.reset.email.keyup'],['btnvalidate', 'onclick', 'login.reset.update.click'],['btncancel', 'onclick', 'login.reset.cancel.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginreset', itm[0], itm[1], $nim.fn.findEvent('login', 'loginreset', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginreset'].isLoaded = 1;
				App.Dialog['loginreset'].isActivated = 0;
				$f.hide('loginreset');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginreset'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginreset','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginreset','', props);
					styles = [{"name":"body.background-color","value":"white"},{"name":"body.border","value":"5px var(--color900) double"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"5px 50px 35px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginreset','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginreset', itm.name); }
					});
				
					$f.events('loginreset', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginreset','','forceshow').toLowerCase() == 'true') $heap.login['loginreset'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginreset');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginreset', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginreset'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginreset');
		try {
			if ($k.islastform('loginreset')) { $k.app.unloadwidget('loginreset'); }
			
			var itm, evtArr = [
					['email', 'onchange'],['email', 'onkeyup'],
				['newpw', 'onchange'],['newpw', 'onkeyup'],['confirm', 'onchange'],['confirm', 'onkeyup'],['token', 'onchange'],
				['token', 'onkeyup'],['btnvalidate', 'onclick'],['btncancel', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginreset', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginreset', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginreset');
			if (App) {
				var dlgItem = App.Dialog['loginreset'], 
					dlgCount = App.Dialog['loginreset'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginreset'}});
			}
		}
		finally {
			App.Dialog['loginreset'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginreset');
			blCancel = $f.events('loginreset', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginreset');
			$k.instance.restore();
			$f.events('loginreset', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginreset");
				App.Dialog['loginreset'].isLoaded = 0;
				App.Dialog['loginreset'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginreset');
			if ($k.isformloaded('loginreset') == false) {
				retval = $f.events('loginreset', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginreset");
			
			// Pull DataModel. 
			$k.instance.save('loginreset');
			if ($f.model('loginreset').enabled) { $f.model('loginreset').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginreset'].isActivated) {
				$f.events('loginreset', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginreset'].Code, 'loginreset');
 
/** Form Template --------------------------------------
 *  NAME: loginconfirm
 *
 * version: 5.0
 **/
$heap.login['loginconfirm'] = { };
$heap.login['loginconfirm'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginconfirm';
			if (!$heap.login[pos.form]) { pos.form = 'loginconfirm'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginconfirm']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginconfirm',pos.left,pos.top,480,640,styles);
			$f.hide('loginconfirm');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginconfirm','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"rgba(0,0,0,0.30)"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginconfirm','', styles);
			
			
			$f.add('loginconfirm','lbspace','label-right','','0','0','105','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','lbspace', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 170px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','lbspace', styles);
			$f.add('loginconfirm','frame','div','','0','0','380','107');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginconfirm','frame', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"5px var(--color900) double"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(20,20,20,.85) 8px 8px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginconfirm','frame', styles);
			$f.add($f.getinstname('loginconfirm','frame'),'msgtitle','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','msgtitle', props);
				styles = [{"name":"color","value":"var(--color50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"height","value":"63px"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"28px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -20px 4px -20px"},{"name":"div.padding","value":"0px 0px 0px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','msgtitle', styles);
			$f.add($f.getinstname('loginconfirm','frame'),'msg','label-right','','0','0','360','100');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Are you sure?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','msg', props);
				styles = [{"name":"color","value":"var(--color600)"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"28px"},{"name":"line-height","value":"49px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"20px 10px 15px 10px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','msg', styles);
			$f.add($f.getinstname('loginconfirm','frame'),'btnyes','button','','0','0','199','33');
				props = [{"name":"event-click","value":"login.confirm.yes.click"},{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Yes"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginconfirm','btnyes', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','btnyes', styles);
			$f.add($f.getinstname('loginconfirm','frame'),'btnno','button','','0','0','131','33');
				props = [{"name":"event-click","value":"login.confirm.no.click"},{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"No"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginconfirm','btnno', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','btnno', styles);
			$f.setprop('loginconfirm','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginconfirm').enabled ) { $f.model('loginconfirm').create('loginconfirm'); }
			$nim.React.build('loginconfirm');
			$f.refresh('loginconfirm');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnyes', 'onclick', 'login.confirm.yes.click'],['btnno', 'onclick', 'login.confirm.no.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginconfirm', itm[0], itm[1], $nim.fn.findEvent('login', 'loginconfirm', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginconfirm'].isLoaded = 1;
				App.Dialog['loginconfirm'].isActivated = 0;
				$f.hide('loginconfirm');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginconfirm'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginconfirm','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginconfirm','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"50px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginconfirm','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginconfirm', itm.name); }
					});
				
					$f.events('loginconfirm', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginconfirm','','forceshow').toLowerCase() == 'true') $heap.login['loginconfirm'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginconfirm');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginconfirm', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginconfirm'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginconfirm');
		try {
			if ($k.islastform('loginconfirm')) { $k.app.unloadwidget('loginconfirm'); }
			
			var itm, evtArr = [
					['btnyes', 'onclick'],['btnno', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginconfirm', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginconfirm', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginconfirm');
			if (App) {
				var dlgItem = App.Dialog['loginconfirm'], 
					dlgCount = App.Dialog['loginconfirm'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			App.Dialog['loginconfirm'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginconfirm');
			blCancel = $f.events('loginconfirm', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginconfirm');
			$k.instance.restore();
			$f.events('loginconfirm', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginconfirm");
				App.Dialog['loginconfirm'].isLoaded = 0;
				App.Dialog['loginconfirm'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginconfirm');
			if ($k.isformloaded('loginconfirm') == false) {
				retval = $f.events('loginconfirm', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginconfirm");
			
			// Pull DataModel. 
			$k.instance.save('loginconfirm');
			if ($f.model('loginconfirm').enabled) { $f.model('loginconfirm').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginconfirm'].isActivated) {
				$f.events('loginconfirm', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginconfirm'].Code, 'loginconfirm');
 
/** Form Template --------------------------------------
 *  NAME: loginprompt
 *
 * version: 5.0
 **/
$heap.login['loginprompt'] = { };
$heap.login['loginprompt'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginprompt';
			if (!$heap.login[pos.form]) { pos.form = 'loginprompt'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginprompt']);
			instName = $heap.login[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginprompt'}});
			}
		}
		finally {
			if (show) { $heap.login[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginprompt',pos.left,pos.top,480,640,styles);
			$f.hide('loginprompt');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginprompt','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"rgba(0,0,0,0.30)"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginprompt','', styles);
			
			
			$f.add('loginprompt','lbspace1','label-right','','0','0','105','23');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprompt','lbspace1', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(50% - 150px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprompt','lbspace1', styles);
			$f.add('loginprompt','frame','div','','0','0','380','139');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginprompt','frame', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"var(--color50)"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color50)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"5px var(--color900) double"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(20,20,20,.85) 8px 8px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginprompt','frame', styles);
			$f.add($f.getinstname('loginprompt','frame'),'msgtitle','label','','0','0','105','69');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Prompt"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginprompt','msgtitle', props);
				styles = [{"name":"color","value":"var(--color50)"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"background","value":"linear-gradient(90deg, rgba(0,0,0,0) 9%, rgba(39,42,53,0.42) 33%, rgba(39,42,53,0.94) 67%)"},{"name":"display","value":"table"},{"name":"height","value":"63px"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom-color","value":"#fff"},{"name":"border-bottom-width","value":"1px"},{"name":"border-style","value":"solid"},{"name":"border-top-color","value":"#fff"},{"name":"border-top-width","value":"1px"},{"name":"font-size","value":"28px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.letter-spacing","value":"-1px"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"var(--color800)"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px -20px 4px -20px"},{"name":"div.padding","value":"0px 0px 0px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprompt','msgtitle', styles);
			$f.add($f.getinstname('loginprompt','frame'),'input','textbox','','0','0','380','46');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Answer..."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"input"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginprompt','input', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #ddd"},{"name":"outline","value":"none"},{"name":"padding","value":"10px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"16.5px"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"div.background-color","value":"transparent"},{"name":"div.border-radius","value":"11px"},{"name":"div.border","value":"1px solid #ddd"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"25px 0px 25px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginprompt','input', styles);
			$f.add($f.getinstname('loginprompt','frame'),'btnok','button','','0','0','165','33');
				props = [{"name":"event-click","value":"login.prompt.ok.click"},{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Ok"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprompt','btnok', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color600)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprompt','btnok', styles);
			$f.add($f.getinstname('loginprompt','frame'),'btncancel','button','','0','0','131','33');
				props = [{"name":"event-click","value":"login.prompt.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginprompt"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginprompt','btncancel', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"var(--color800)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"calc(50% - 5px)"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"5px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"1px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"100%"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 5px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginprompt','btncancel', styles);
			$f.setprop('loginprompt','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginprompt').enabled ) { $f.model('loginprompt').create('loginprompt'); }
			$nim.React.build('loginprompt');
			$f.refresh('loginprompt');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginprompt'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnok', 'onclick', 'login.prompt.ok.click'],['btncancel', 'onclick', 'login.prompt.cancel.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginprompt', itm[0], itm[1], $nim.fn.findEvent('login', 'loginprompt', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginprompt'].isLoaded = 1;
				App.Dialog['loginprompt'].isActivated = 0;
				$f.hide('loginprompt');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginprompt'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginprompt','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginprompt','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"50px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginprompt','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginprompt', itm.name); }
					});
				
					$f.events('loginprompt', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginprompt','','forceshow').toLowerCase() == 'true') $heap.login['loginprompt'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginprompt');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginprompt'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginprompt', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginprompt'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginprompt');
		try {
			if ($k.islastform('loginprompt')) { $k.app.unloadwidget('loginprompt'); }
			
			var itm, evtArr = [
					['btnok', 'onclick'],['btncancel', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginprompt', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginprompt'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginprompt', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginprompt');
			if (App) {
				var dlgItem = App.Dialog['loginprompt'], 
					dlgCount = App.Dialog['loginprompt'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginprompt'}});
			}
		}
		finally {
			App.Dialog['loginprompt'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginprompt');
			blCancel = $f.events('loginprompt', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginprompt');
			$k.instance.restore();
			$f.events('loginprompt', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginprompt'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginprompt");
				App.Dialog['loginprompt'].isLoaded = 0;
				App.Dialog['loginprompt'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginprompt');
			if ($k.isformloaded('loginprompt') == false) {
				retval = $f.events('loginprompt', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginprompt");
			
			// Pull DataModel. 
			$k.instance.save('loginprompt');
			if ($f.model('loginprompt').enabled) { $f.model('loginprompt').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginprompt'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginprompt'].isActivated) {
				$f.events('loginprompt', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.login['loginprompt'].Code, 'loginprompt');
 
// Create New App Instance -----------------------------
var _config = {
	namespace: 'login',
	login: {id: 'ZMZA2AZ3qvqZZMZM', email: 'guest@guest.com'},
	
	multiple: false,
	postbox: false,
	mvc: true,
	
	theme: 'v4.0',
	size: 428279,
	canvas: {width: 2048, height: 1101},
	productname: 'nimble App',
	copyright: '(c) 2017',
	compiledon: '04/20/2025 03:18 pm',
	version: '1.0',
	description: 'Created with nimble-ide v5 for Javascript.',
	author: '(Your Name Here)',
	email: 'nimblejs@gmail.com',
	homepage: 'https://www.nimble-ide.com',
	startform: 'loginsplash',
	palette: '"color50":"#ffffff","color100":"#b3c6ff","color200":"#a1b1e7","color300":"#8f9dd0","color400":"#7d89b9","color500":"#6c76a2","color600":"#5b638c","color700":"#4b5177","color800":"#3b3f62","color900":"#2b2f4e","colora100":"#1c1f3b","colora200":"#F2B807","colora400":"#F28705","colora700":"#C52104","b50":"#fafafa","b100":"#f5f5f5","b200":"#eeeeee","b300":"#e0e0e0","b400":"#bdbdbd","b500":"#9e9e9e","b600":"#757575","b700":"#616161","b800":"#424242","b900":"#212121","br50":"#efebe9","br100":"#d7ccc8","br200":"#bcaaa4","br300":"#a1887f","br400":"#8d6e63","br500":"#795548","br600":"#6d4c41","br700":"#5d4037","br800":"#4e342e","br900":"#3e2723","bg50":"#eceff1","bg100":"#cfd8dc","bg200":"#b0bec5","bg300":"#90a4ae","bg400":"#78909c","bg500":"#607d8b","bg600":"#546e7a","bg700":"#455a64","bg800":"#37474f","bg900":"#263238"',
	
	// METHODS
	dialog: {
		'applanding': $k.instance.newobject($heap.login['applanding']),
		'loginforgot': $k.instance.newobject($heap.login['loginforgot']),
		'loginmain': $k.instance.newobject($heap.login['loginmain']),
		'loginmsg': $k.instance.newobject($heap.login['loginmsg']),
		'loginprofile': $k.instance.newobject($heap.login['loginprofile']),
		'loginregister': $k.instance.newobject($heap.login['loginregister']),
		'loginsplash': $k.instance.newobject($heap.login['loginsplash']),
		'loginreset': $k.instance.newobject($heap.login['loginreset']),
		'loginconfirm': $k.instance.newobject($heap.login['loginconfirm']),
		'loginprompt': $k.instance.newobject($heap.login['loginprompt']),
	},
	onStartup: function(pos) {
		$heap.login[pos.form].Load(pos);
	},
	onLoadLibs: function() {
// --------------------------------------
// Include Custom Javascript Libraries //
// --------------------------------------

    /*ICON*/
$nim.Load32.Add('fa4_css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'css');
    /*~ICON*/
    /*VALIDATE*/
$nim.Load32.Add ('validate', $nim.home_server + 'js/_libs/validate/validate.min.js', 'js');
    /*~VALIDATE*/
    // --------------------------------------
	},
	onClose: function(dlgname) {
	},
	onListeners: function(self) {
		self = self || {};
		/**
		* App Listeners
		* version: 5.0
		**/
		self.KeyPress = function(dlg_name) {
		};
		self.KeyUp = function(dlgname) {
			if (DESKTOP.switching) { return; }
			if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
				if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
					DESKTOP.Code.SlideDesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
				}
			}
		};
		self.DragStart = function(dlg_name) {
		};
		self.Drag = function(dlg_name) {
		};
		self.Move = function(dlg_name) {
		};
		self.Minimize = function(dlg_name) {
		};
		self.Maximize = function(dlg_name) {
		};
		self.Restore = function(dlg_name) {
		};
		self.Resize = function(dlg_name) {
			try {
			
			} catch(e) {
			
			} finally {
				$k.app.resizewidgets(dlg_name);
			}
		};
		self.OrientationChange = function() {
			
		};
		self.Orientation = function(event) {
			
		};
		return self;
	},
	onDataModel: function() {
		return [{"form":"loginforgot","ctrl":"email","bind":"email"},{"form":"loginmain","ctrl":"username","bind":"username"},{"form":"loginmain","ctrl":"password","bind":"password"},{"form":"loginprofile","ctrl":"login","bind":"login"},{"form":"loginprofile","ctrl":"email","bind":"email"},{"form":"loginprofile","ctrl":"firstname","bind":"firstname"},{"form":"loginprofile","ctrl":"lastname","bind":"lastname"},{"form":"loginprofile","ctrl":"dob","bind":"dob"},{"form":"loginregister","ctrl":"login","bind":"login"},{"form":"loginregister","ctrl":"email","bind":"email"},{"form":"loginregister","ctrl":"password","bind":"password"},{"form":"loginregister","ctrl":"confirm","bind":"confirmpw"},{"form":"loginreset","ctrl":"email","bind":"email"},{"form":"loginreset","ctrl":"newpw","bind":"newpw"},{"form":"loginreset","ctrl":"confirm","bind":"confirm"},{"form":"loginreset","ctrl":"token","bind":"token"},{"form":"loginprompt","ctrl":"input","bind":"input"}];
	},
	onBindLists: function() {
		return [];
	}
};
AppInst = $k.app.createapp(_config, _config.onListeners);
if (AppInst && AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.isWidget = false;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.guid = 'b06e16f3-86c9';
	AppInst.App.name = 'login';
	AppInst.App.startfrm = _config.startform;
	AppInst.App.query = _config.query || {};
	AppInst.App.icon = 'media/icons/app.gif';
	AppInst.New();
	if (!DESKTOP.Code) { DESKTOP.Code = $heap.login.Code; }
}
