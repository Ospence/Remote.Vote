(function () {
    angular.module('VotingApp')
    .controller('adminController', function (accountService, adminService, $location) {
        var vm = this;

        vm.Users = userService.list();
        
        vm.update = function (user) {
            adminService.update(user);

        vm.editRoles = function (roles) {
            adminService.edit(roles);
            }

        };
    });
})();