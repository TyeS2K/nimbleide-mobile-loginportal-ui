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

