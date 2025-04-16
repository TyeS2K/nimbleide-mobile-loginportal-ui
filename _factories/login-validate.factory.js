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

