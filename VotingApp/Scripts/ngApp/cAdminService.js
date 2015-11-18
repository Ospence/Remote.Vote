; (function () {

    angular.module('VotingApp')
      .service('cAdminService', ['$resource', '$http', function ($resource, $http) {
          var self = this;



          self.Find = function (Id, callback) {
              $http.get('/api/user/' + Id)
              .then(function (result) {
                  callback(result);

              });
          };

          self.list = function (callback) {
              $http.get('/api/Account/ListRoles').success(
                  function (result) {
                      callback(result);
                  });
          };

          
          self.add = function (userid, role, callback) {
              var user = self.Find(userid)
              $http.post('/api/Account/AddRole')
              .then(function (role) {
                  add.role(role);
              });
              newRole.$save(callback);
          };


          self.update = function (Id, role, callback) {
              var user = self.Find(Id)
              $http.post('/api/Account/RoleUpdate')
               .then(function (result) {
                   role.$save();
               });
              callback(result);
          };

          self.delete = function (Id, role, callback) {
              var user = self.Find(Id)
              $http.post('/api/Account/RemoveRole',user, role)
                  .then(function (result) {

                      user.$remove({ id: role.id }, callback);
                  });
          };

          self.listRole = function (role, callback) {
              $http.get('/api/Account/ListOfRolesOwner')
          }

          self.listActive = function (role, callback) {
              $http.get('/api/Account/ListOfRolesOwner')
          }
      }]);
})();