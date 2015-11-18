(function () 
{
    angular.module("VotingApp")
        .controller("motionController", function ($scope, $location, motionService) {
            // ---IMPORTANT---
            // I over complicated the get and update process quite a bit, but opted to leave it because it's working.
            // We need to go in and simplify things before actually publishing a final result.
            // -John


            var vm = this;

            vm.motions = [];

            vm.func = function (motion) {
                vm.currentMotion = motion.id;
            };

            vm.getList = function () {
                motionService.list(function (data) {
                    vm.motions = data.data;
                });
            };

            vm.getList();

            vm.getMotion = function () {
                motionService.getMotion(vm.currentMotion, function (data) {
                    vm.selectedMotion = data.data;
                });
            };

            vm.add = function () {
                motionService.add(vm.newMotion, function (result) {
                    vm.motions.push(result);
                    $('#addMotion')[0].reset();
                    vm.getList();
                });
            };

            vm.edit = function () {
                motionService.getMotion(vm.currentMotion, function (motion) {
                    motionService.edit(motion, function (result) {
                        motionService.update(result, vm.motions);
                        vm.getList();
                    });
                });
            };

            // creates a vote and stores the motion ID on the vote object
            // The user Id is added during the "POST" function in VotesController
            vm.addVote = function (answer) {
                var vote = {
                    onMotionId: vm.currentMotion,
                    yes: answer
                };
                motionService.addVote(vote, function (result) {
                    console.log("addVote_result: " + result);
                    motionService.getMotion(vm.currentMotion, function (motion) {
                        motion.votes.push(vote);
                        motionService.update(motion, vm.motions);
                        });
                });
                vm.getList();
            };

            vm.allowSecond = function () {
                motionService.getMotion(vm.currentMotion, function (motion) {
                    motionService.allowSecond(motion, function (result) {
                        motionService.update(result, vm.motions);
                        vm.getList();
                    });
                });
            };
            
            vm.secondMotion = function () {
                motionService.getMotion(vm.currentMotion, function (motion) {
                    motionService.secondMotion(motion, function (result) {
                        motionService.update(result, vm.motions);
                        vm.getList();
                    });
                });
            };



            //vm.killMotion = function () {
            //    motionService.killMotion(motion);
            //};

        });
})();