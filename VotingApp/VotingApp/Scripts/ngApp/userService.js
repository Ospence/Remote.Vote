(function () {

    angular.module('VotingApp')
        .service('userService', ['$resource', '$http', function ($resource, $http) {
        var self = this;

        var AdminUserAPI = $resource('/api/admin/:id');

            // add each user type

            // make each function for each user type

            self.listAdmin = function () {
                return AdminUserAPI.query();
            };

            self.addAdmin = function (adminUser, callback) {
               $http.post('api/Account/RegisterAdmin', adminUser).success
               var newAdminUser = new AdminUserAPI({
                   
                    firstName: adminUser.firstName,
                    lastName: adminUser.lastName,
                    email: adminUser.email,
                    phoneNumber: adminUser.phoneNumber
                });
                newAdminUser.$save(callback);
            };

            self.updateAdmin = function (adminUser) {
                adminUser.$save();
            };

        var StaffUser = $resource('api/staff/:id');

            self.listStaff = function () {
                return StaffUser.query();
            };

            self.addStaff = function (staffUser, callback) {
                var newStaffUser = new StaffUser({
                    firstName: staffUser.firstName,
                    lastName: staffUser.lastName,
                    email: staffUser.email,
                    phoneNumber: staffUser.phoneNumber
                });
                newStaffUser.$save(callback);
            };

            self.updateStaff = function (staffUser) {
                staffUser.$save();
            };

      

        var ChairmenUser = $resource('api/chairmen/:id');

            self.listChairmen = function () {
                return ChairmenUser.query();
            };

            self.addChairmen = function (chairmenUser, callback) {
                var newChairmenUser = new ChairmenUser({
                    firstName: chairmenUser.firstName,
                    lastName: chairmenUser.lastName,
                    email: chairmenUser.email,
                    phoneNumber: chairmenUser.phoneNumber
                });
                newChairmenUser.$save(callback);
            };

            self.updateChairmen = function (chairmenUser) {
                chairmenUser.$save();
            };

            

        var DirectorsUser = $resource('api/directors/:id');

            self.listDirectors = function () {
                return DirectorsUser.query();
            };

            self.addDirectors = function (directorsUser, callback) {
                var newDirectorsUser = new DirectorsUser({
                    firstName: directorsUser.firstName,
                    lastName: directorsUser.lastName,
                    email: directorsUser.email,
                    phoneNumber: directorsUser.phoneNumber
                });
                newDirectorsUser.$save(callback);
            };

            self.updateDirectors = function (directorsUser) {
                directorsUser.$save();
            };

            
        }]);
})();