(function () {

    angular.module('VotingApp')
        .service('userService', ['$resource', '$http', function ($resource, $http) {
        var self = this;

        var UserAPI = $resource('/api/user/:id');

            // add each user type

            // make each function for each user type

            self.list = function () {
                return UserAPI.query();
            };

            self.add = function (user, callback) {
                $http.post('api/Account/Register', user)
                    .then(function () {
                        var newUser = new UserAPI({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userName: user.userName,
                            phoneNumber: user.phoneNumber,
                            email: user.userName,
                            password: user.password,
                            passwordConfirmed: user.passwordConfirmed
                        });
                        newUser.$save(callback);
                    });
            };

            self.update = function (user) {
                user.$save();
            };
            
        }]);
})();