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
                console.log("REALLY!");
                $http.defaults.headers.common.Authorization = 'Bearer' + result.access_token;
                callback();
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
            console.log("Logging Out...");
            $http.post('api/Account/Logout', {
            }).then(function (result) {
                console.log("Logged Out Success");
                $http.defaults.headers.common.Authorization = undefined;
                callback();
                
            });
        };
    });
})();