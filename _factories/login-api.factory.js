/* Login Manager Component Manager/Factory :
   
*/

FACTORY.Register("LoginAPI", function loginFactory() {
	var login = function (config) {
		var self = this;
      	var _sv, _dlg, _app = '';
      	var server = '<server>';
      	var $msg = $fctry.new('MsgManager');
      
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

          var url = window.location.href, uiReady = false; 
 
          $f.setfocus(_dlg, 'login');
		};
      
		self.addListener = function() {

		};
       	self.postLogin = function(dlg, cbk) {
 
        };
        self.postLogout = function(cbk) {

        };
      
      	self.postRegister = function(dlg) {

        };
      	self.postForgot = function(dlg) {

        };
      	self.postReset = function(dlg) {

        };
      
      	// User License Agreement
      	self.postLicense = function(dlg) {

        };
      	self.loadLicense = function() {

        };
      
      	self.showError = function(title, info) {
          $f.load('loginmsg');
          $f.settext('loginmsg', 'infotitle', title);
          $f.settext('loginmsg', 'info', info);
          $f.max('loginmsg', function(anim) {
          	if (anim.pos == 100) {
              $f.show('loginmsg');
            }
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
              $me.enable('btnagree');
          }
        };
      
        self.onload = function(main) {
          
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

