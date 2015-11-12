(function () {
    angular.module('VotingApp')
    .controller('registerController', function (accountService, $location){
        var vm = this;

        vm.register = function () {
            accountService.register(vm.newUser, function (result) {
                $location.path('/login');
            });
        };
    });
})();