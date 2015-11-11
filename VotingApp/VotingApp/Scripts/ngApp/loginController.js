(function () {
    angular.module('VotingApp')
    .controller('loginController', function (accountService, $location) {
        var vm = this;

        vm.login = function() {
            console.log("Logged in as" + vm.User.username)
            accountService.login(vm.User.username, vm.User.password, function () {
                $location.path('/login');
            });
        };

        vm.logout = function () {
            console.log('logged out?');
            accountService.logout();
        };
    });
})();