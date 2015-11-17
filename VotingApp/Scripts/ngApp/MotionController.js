motion(function () 
{
    angular.module("VotingApp")
        .controller("motionController", function ($location, motionService) {
            var vm = this;

            vm.motions = motionService.list();

            vm.add = function () {
                vm.newMotion.created = new Date().toLocaleString();
                motionService.add(vm.newMotion, function (result) {
                    vm.motions.push(result);
                    $('#addMotion')
                });
            };

            vm.update = function (motion) {
                motionService.update(motion);
            }

        });
})();