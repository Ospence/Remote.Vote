(function () {
    angular.module('VotingApp')
    .controller('cAdminController', function (cAdminService, userService, $location) {
        var vm = this;

        vm.Users = userService.list();

        vm.role = cAdminService.list();

        vm.update = function (role) {
            cAdminService.update(role);
        }

        vm.add = function () {
            cAdminService.add(vm.newRole, function (result) {
                vm.role.push(result);
                $('#addRole')[0].reset();
            });

        };



    });
})();