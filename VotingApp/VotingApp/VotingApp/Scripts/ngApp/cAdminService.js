(function (){ 
    //angular.module('VotingApp')
    //    .constant('USER_ROLES', {
    //        admin: 'admin',
    //        staff: 'staff',
    //        director: 'director',
    //        chairman: 'chairman'

    //    });

    angular.module('VotingApp')
      .service('userService', ['$resource', '$http', function ($resource, $http) {
          var self = this;           
          var AdminAPI = $resource('/api/user/:id');


          self.list = function () {
              return AdminAPI.query();
          };

          self.update = function (user) {

              user.$save();
          };
          self.editRoles = function (roles) {
              var role.id = "staff";
              
              
          }

      }]);
})();