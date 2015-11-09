(function () {
    angular.module('VotingApp')
    .controller('RegisterController', function (RegisterService, $location) {
        var vm = this;

        vm.applicationusers = RegisterService.list();

        vm.add = function () {
            RegisterService.add(vm.newApplicationUser, function (result) {
                vm.e.push(result);
                $('#addApplicationUser')[0].reset();
                //$location.path('/register');
            }); 

        };

        vm.update = function (applicationUser) {
            RegisterService.update(applicationUser);
        };

       // vm.delete = function (applicationUser) {
            //RegisterService.delete(applicaitonUser, function () {
                //vm.applicationUsers = vm.appllicationUsers.filter(function (e) {
                    //return e.id != applicationUser.id;
              //  });
            });
        

})();