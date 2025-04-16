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

