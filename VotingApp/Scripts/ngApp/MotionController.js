(function () 
{
    angular.module("VotingApp")
        .controller("motionController", function ($location, motionService) {
            var vm = this;

            vm.currentMotion = {};

            motionService.list(function(data){
                vm.motions = data;
            });

            motionService.getMotion(motion.id, function (data) {
                return data;
            });

            vm.add = function () {
                motionService.add(vm.newMotion, function (result) {
                    vm.motions.push(result);
                    $('#addMotion')[0].reset();
                });
            };

            // creates a vote and stores the motion ID on the vote object
            // The user Id is added during the "POST" function in VotesController
            vm.addVote = function (answer) {
                var vote = {};
                vote.onMotionId = vm.currentMotionId;
                vote.yes = answer;
                motionService.addVote(vote, function (result) {
                    motionService.getMotion(currentMotion).votes.push(result);
                });
            };

            //---did not work in HTML---
            //vm.setCurrentMotion = function (id) {
            //    console.log(vm.currentMotion);
            //    vm.currentMotion = motionService.getMotion(id);
            //}

            vm.update = function (motion) {
                motionService.update(motion);
            };

            vm.allowSecond = function (motion) {
                motionService.allowSecond(motion);
            };
            
            vm.secondMotion = function (motion) {
                motionService.secondMotion(motion);
            };

            vm.killMotion = function () {
                motionService.killMotion(motion);
            };

        });
})();