(function () {
    angular.module('VotingApp')
    .controller('cAdminController', function (cAdminService, userService, $location) {
        var vm = this;

        vm.Users = userService.list();        
        vm.RoleSelect = [];
        //for (var j = 0; j < vm.Users.length; j++) {
        //    vm.RoleSelect[j] = vm.Users[j].Roles.id;
        //    vm.RadioSelect[j] = 
        //}
        vm.RoleChange = function (i) {
            vm.newRole = vm.RoleSelect[i];
        };

        
        vm.RadioSelect = [];
        vm.RadioChange = function (i) {
            vm.newRadio = vm.RadioChange[i]
        };

     
        cAdminService.list(function (result) {
            vm.roles = result;
        });

        vm.listActive = function (role) {
            cAdminService.list(role);
        };

        vm.update = function (user, i) {
            var roleArray = [vm.RoleSelect[i]];

            if ($("input:radio[name=roletype]:checked").val() === "Active") {
                roleArray.push("d835f990-3012-4432-868c-fee4b84522b3");
            }

            cAdminService.update(user.id, roleArray, function (result) {
                if (result.roles == "fbf5be7f-a4f8-4325-bf4f-ff947fca8afd", "2d70845e-9e13-4f16-8a4c-a547ceff2d8d", "5122c6ff-444b-4c31-9d82-05922a75206d", "c0946045-a104-4ff0-982f-af48434a118a", "fbf5be7f-a4f8-4325-bf4f-ff947fca8afd")
                {
                    alert("updated");
                } 
                console.log(result);
            });
        };

        //vm.add = function () {
        //    cAdminService.add(vm.user.Id, vm.newRole, function (result) {

        //        vm.roles.push(result);
        //        $('#addRole')[0].reset();
        //    });

        //};


       cAdminService.listCurrentRoles( function (userId, result) {
            vm.listCurrentRoles = result;
        });


        

        vm.delete = function (role) {
            var roleArray = [vm.newRole.id];
            if ($("input:radio[name=roletype]").val() === "Inactive") {
                roleArray.push("d835f990-3012-4432-868c-fee4b84522b3");
            }

            cAdminService.delete(role.id, roleArray, function (result) {
                console.log(result);

            });
        };




        vm.list = function (role) {
            cAdminService.list(function (result) {

            });
        };
    });

    
})();