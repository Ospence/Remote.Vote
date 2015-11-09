(function () {

    angular.module('VotingApp')
        .service('registerService', ['$resource', function ($resource) {
            var self = this;

            var ApplicationUser = $resource('/api/applicationusergit /:id');

            self.list = function () {
                return ApplicationUser.query();
            };

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