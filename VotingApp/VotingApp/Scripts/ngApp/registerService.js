(function () {

    angular.module('VotingApp')
        .service('registerService', ['$resource', function ($resource) {
            var self = this;

            var adminUser = $resource('/api/global/:id');
            var chairmanUser = $resource('api/chairman/:id');
            // add each user type

            // make each function for each user type
            self.listAdmin = function () {
                return adminUser.query();
            };

            self.listChairman = function () {
                return chairmanUser.query();
            }

            self.add = function (applicationUser, callback) {
                var newApplicationUser = new ApplicationUser({
                    firstName: applicationUser.firstName,
                    lastName: applicationUser.lastName,
                    email: applicationUser.email,
                    phoneNumber: applicationUser.phoneNumber
                });
                newApplicationUser.$save(callback);
            };

            self.update = function (applicationUser) {
                applicationUser.$save();
            };
        }]);
})();