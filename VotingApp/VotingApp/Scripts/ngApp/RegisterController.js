(function () {
    angular.module('VotingApp')
    .controller('registerController', function (registerService, $location) {
        var vm = this;

        vm.applicationusers = registerService.list();

        vm.add = function () {
            registerService.add(vm.newApplicationUser, function (result) {
                vm.e.push(result);
                $('#addApplicationUser')[0].reset();
                //$location.path('/register');
            }); 

        };

        vm.update = function (applicationUser) {
            registerService.update(applicationUser);
        };

       // vm.delete = function (applicationUser) {
            //RegisterService.delete(applicaitonUser, function () {
                //vm.applicationUsers = vm.appllicationUsers.filter(function (e) {
                    //return e.id != applicationUser.id;
              //  });
            });
        

})();