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

