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

