(function () {
    angular.module('VotingApp')
    .controller('cAdminController', function (cAdminService, userService, $location) {
        var vm = this;

        vm.Users = userService.list();

        cAdminService.list(function (result) {
            vm.roles = result;
        });

        vm.listActive = function (role) {
            cAdminService.list(role);
        };

        vm.update = function (role) {
            var roleArray = [vm.newRole.id];
            
            if ($("input:radio[name=roletype]").val() === "Active") {
                roleArray.push("d835f990-3012-4432-868c-fee4b84522b3");
            }

            cAdminService.update(role.id, roleArray, function (result) {
                console.log(result.data);
            });
        };

        //vm.add = function () {
        //    cAdminService.add(vm.user.Id, vm.newRole, function (result) {
                
        //        vm.roles.push(result);
        //        $('#addRole')[0].reset();
        //    });

        //};

        vm.delete = function (role) {
            var roleArray = [vm.newRole.id];
            if ($("input:radio[name=roletype]").val() === "Inactive") {
                roleArray.push("d835f990-3012-4432-868c-fee4b84522b3");
            }

            cAdminService.delete(role.id, roleArray, function (result) {
                console.log(result.data);

            });
        };
            
        


        vm.list = function (role) {
            cAdminService.list(role);
        };
        

    });
})();