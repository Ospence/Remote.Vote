(function () {
    angular.module('VotingApp')
    .controller('userController', function (userService, $location) {
        var vm = this;

    vm.adminUsers = userService.list();

        vm.add = function () {
            userService.add(vm.newAdminUser, function (result) {
                vm.adminUsers.push(result);
                $('#addAdminUser')[0].reset();
                //$location.path('/register');
            }); 

        };

        vm.update = function (adminUser) {
            userService.update(adminUser);
        };

    vm.staffUsers = userService.list();

        vm.add = function () {
            userService.add(vm.newStaffUser, function (result) {
                vm.staffUsers.push(result);
                $('#addStaffUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.update = function (staffUser) {
            userService.update(staffUser);
        };

        vm.delete = function (staffUser) {
            userService.delete(staffUser, function () {
                vm.staffUsers = vm.staffUsers.filter(function (s) {
                    return s.id != staffUser.id;
                });
            });
        };

    vm.chairmenUsers = userService.list();

        vm.add = function () {
            userService.add(vm.newChairmenUser, function (result) {
                vm.chairmenUsers.push(result);
                $('#addChairmenUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.update = function (chairmenUser) {
            userService.update(chairmenUser);
        };

        vm.delete = function (chairmenUser) {
            userService.delete(chairmenUser, function () {
                vm.chairmenUsers = vm.chairmenUsers.filter(function (c) {
                    return c.id != chairmenUser.id;
                });
            });
        };

    vm.directorsUsers = userService.list();

        vm.add = function () {
            userService.add(vm.newDirectorsUser, function (result) {
                vm.directorsUsers.push(result);
                $('#addDirectorsUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.update = function (directorsUser) {
            userService.update(directorsUser);
        };

        vm.delete = function (directorsUser) {
            userService.delete(directorsUser, function () {
                vm.directorsUsers = vm.directorUsers.filter(function (d) {
                    return d.id != directorsUser.id;
                });
            });
        };

    });
})();