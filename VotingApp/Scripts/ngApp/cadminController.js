(function () {
    angular.module('VotingApp')
    .controller('cAdminController', function (cAdminService, userService, $location) {
        var vm = this;

        vm.Users = userService.list();

        cAdminService.list(function (result) {
            vm.roles = result;
    });

        vm.update = function (role) {
            cAdminService.update(role);
        };

        vm.add = function () {
            cAdminService.add(vm.user.Id, vm.newRole, function (result) {
                
                vm.roles.push(result);
                $('#addRole')[0].reset();
            });

        };

        vm.list = function (role) {
            cAdminService.list(role);
        };
        vm.listActive = function (role) {
            cAdminService.list(role);
            $scope.selected = $scope.items[0];
        };

    });
})();