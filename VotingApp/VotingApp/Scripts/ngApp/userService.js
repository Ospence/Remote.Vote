(function () {

    angular.module('VotingApp')
        .service('userService', ['$resource', function ($resource) {
        var self = this;

        var AdminUser = $resource('/api/admin/:id');

            // add each user type

            // make each function for each user type

            self.list = function () {
                return AdminUser.query();
            };
            //self.listAdmin = function () {
            //    return AdminUser.query();
            //};

            self.add = function (adminUser, callback) {
                var newAdminUser = new AdminUser({
                    firstName: adminUser.firstName,
                    lastName: adminUser.lastName,
                    email: adminUser.email,
                    phoneNumber: adminUser.phoneNumber
                });
                newAdminUser.$save(callback);
            };

            self.update = function (adminUser) {
                adminUser.$save();
            };

        var StaffUser = $resource('api/staff/:id');

            self.listStaff = function () {
                return StaffUser.query();
            };

            self.add = function (staffUser, callback) {
                var newStaffUser = new StaffUser({
                    firstName: staffUser.firstName,
                    lastName: staffUser.lastName,
                    email: staffUser.email,
                    phoneNumber: staffUser.phoneNumber
                });
                newStaffUser.$save(callback);
            };

            self.update = function (staffUser) {
                staffUser.$save();
            };

            self.delete = function (staffUser, callback) {
                staffUser.$remove({ id: staffUser.id }, callback);
            };

        var ChairmenUser = $resource('api/chairmen/:id');

            self.listChairmen = function () {
                return ChairmenUser.query();
            };

            self.add = function (chairmenUser, callback) {
                var newChairmenUser = new ChairmenUser({
                    firstName: chairmenUser.firstName,
                    lastName: chairmenUser.lastName,
                    email: chairmenUser.email,
                    phoneNumber: chairmenUser.phoneNumber
                });
                newChairmenUser.$save(callback);
            };

            self.update = function (chairmenUser) {
                chairmenUser.$save();
            };

            self.delete = function (chairmenUser, callback) {
                chairmenUser.$remove({ id: chairmenUser.id }, callback);
            };

        var DirectorsUser = $resource('api/directors/:id');

            self.listDirectors = function () {
                return DirectorsUser.query();
            };

            self.add = function (directorsUser, callback) {
                var newDirectorsUser = new DirectorsUser({
                    firstName: directorsUser.firstName,
                    lastName: directorsUser.lastName,
                    email: directorsUser.email,
                    phoneNumber: directorsUser.phoneNumber
                });
                newDirectorsUser.$save(callback);
            };

            self.update = function (directorsUser) {
                directorsUser.$save();
            };

            self.delete = function (directorsUser, callback) {
                directorsUser.$remove({ id: directorsUser.id }, callback);
            };
        }]);
})();