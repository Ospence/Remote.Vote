(function () {
    angular.module('VotingApp')
    .controller('userController', function (accountService, userService, $location) {
        var vm = this;

    vm.Users = userService.list();

    vm.logout = function () {
        console.log('logged out?');
        accountService.logout();
    };

        vm.add = function () {
            userService.add(vm.newUser, function (result) {
                vm.Users.push(result);
                $('#addUser')[0].reset();
                //$location.path('/register');
            }); 

        };

        vm.update = function (user) {
            userService.update(user);
        };
    });
})();