;(function (){ 
   
    angular.module('VotingApp')
      .service('cAdminService', ['$resource', '$http', function ($resource, $http) {
          var self = this;  
          
          var AdminAPI = $resource('/api/Account/:id');

          self.list = function () {
              return AdminAPI.query();
          };

          self.add = function (role, callback) {
              var newRole = new Role({
                  Role: role.role                  
              });
              newRole.$save(callback);
          };

          self.update = function (role) {
              role.$save();
          };
          self.delete = function (role, callback) {
              role.$remove({ id: role.id }, callback);              
          };

      }]);
})();