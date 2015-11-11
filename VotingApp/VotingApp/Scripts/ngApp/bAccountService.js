(function() {
    angular.module('VotingApp')
    .service('accountService', function ($http){
        var self = this;

        self.login = function (username, password, callback) {
            var data = 'grant_type=password&username=' + username + '&password=' + password;

            $http.post('/token', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (result) {
                $http.defaults.headers.common.Authorization = 'Bearer' + result.access_token;
                myToken = result.access_token;
                callback();
                console.log("REALLY!");
            });
        };

        self.register = function (newUser, callback) {
            $http.post('api/Account/Register', newUser)
            .success(function (result) {
                callback();
                console.log("user registered as " + newUser.email);
            });
        };

        self.logout = function (){
            console.log("Logged Out");
            $http.post('api/Account/Logout', {
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (result) {
                console.log("Logged Out Success");
                $location.path('/login');
                $http.defaults.headers.common.Authorization = undefined;
                callback();
            });
        };
    });
})();