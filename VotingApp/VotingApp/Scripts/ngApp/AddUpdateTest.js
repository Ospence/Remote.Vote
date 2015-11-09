(function () {
    angular.module('VotingApp')
    .controller('testController', function ($location) {
        var vm = this;

        var Admin = $resource('api/global/:id');

        vm.list = function(){
            return Admin.query();
        }

        vm.add = function (user, callback) {
            var newUser = new Bug({
                userName: user.userName,

            });

        vm.update = function (bug) {
            bug.$save();
        };

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