(function () {
    angular.module('VotingApp')
    .controller('userController', function (userService, $location) {
        var vm = this;

    vm.adminUsers = userService.listAdmin();

        vm.addAdmin = function () {
            userService.addAdmin(vm.newAdminUser, function (result) {
                vm.adminUsers.push(result);
                $('#addAdminUser')[0].reset();
                //$location.path('/register');
            }); 

        };

        vm.updateAdmin = function (adminUser) {
            userService.updateAdmin(adminUser);
        };

    vm.staffUsers = userService.listStaff();

        vm.addStaff = function () {
            userService.addStaff(vm.newStaffUser, function (result) {
                vm.staffUsers.push(result);
                $('#addStaffUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.updateStaff = function (staffUser) {
            userService.updateStaff(staffUser);
        };

    vm.chairmenUsers = userService.listChairmen();

        vm.addChairmen = function () {
            userService.addChairmen(vm.newChairmenUser, function (result) {
                vm.chairmenUsers.push(result);
                $('#addChairmenUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.updateChairmen = function (chairmenUser) {
            userService.updateChairmen(chairmenUser);
        };

    vm.directorsUsers = userService.listDirectors();

        vm.addDirectors = function () {
            userService.addDirectors(vm.newDirectorsUser, function (result) {
                vm.directorsUsers.push(result);
                $('#addDirectorsUser')[0].reset();
                //$location.path('/register');
            });

        };

        vm.updateDirectors = function (directorsUser) {
            userService.updateDirectors(directorsUser);
        };

    });
})();