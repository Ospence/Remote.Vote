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
              $http.get('/api/Account/ListRoles')
                  .success(function(data){
                      callback(data)
                  });
          };

          self.listCurrentRoles = function (userId, callback) {
              $http.get('/api/Account/GetRoleByOwner', userId)
              .then(function (result) {
                      callback(result);
                  });
          };


          //self.add = function (userid, role, callback) {
          //   // var user = self.Find(userid)
          //    $http.post('/api/Account/AddRole')
          //    .then(function (role) {
          //        add.role(role);
          //    });
          //    newRole.$save(callback);
          //};


          self.update = function (userid, role, callback) {
              //var user = self.Find(userid)
              var roleUpdateRequest = { UserId: userid, Roles: role };
              //$http.post('/api/Account/RoleUpdate', userid, role)


              $http.post('/api/Account/RoleUpdate', roleUpdateRequest)
               .then(function (result) {                 

                   callback(result.data);
               });
              
          };

          self.delete = function (userid, role, callback) {
              // var user = self.Find(Id)
              var roleRemoveRequest = { UserId: userid, Roles: role };

              $http.post('/api/Account/RemoveRole', {
                  data: roleRemoveRequest,
                  responseType: 'json'
              })
                  .then(function (result) {
                      callback();

                     // userid.delete({ id: role.id }, callback);
                  });
          };

          self.listRole = function (role, callback) {
              $http.get('/api/Account/ListOfRolesOwner')
          }

          self.listActive = function (callback) {
              $http.get('/api/Account/ListOfRolesOwner')
              .success(
                  function (result) {
                      callback(result);
                  });
          };

          
          
      }]);
})();