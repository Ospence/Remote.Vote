(function () 
{
    angular.module("VotingApp")
        .controller("motionController", function ($anchorScroll, $scope, $location, motionService) {
            // ---IMPORTANT---
            // I over complicated the get and update process quite a bit, but opted to leave it because it's working.
            // We need to go in and simplify things before actually publishing a final result.
            // -John


            var vm = this;
            vm.should = false;
            vm.comments = [];
            vm.showComment = false
            vm.currentMotion = "none";
            vm.showTable = function () {
                if (vm.currentMotion == "none") {
                    return true;
                }
                else {
                    return false;
                }
            };
            vm.showComments = function () {
                vm.showComment = !vm.showComment;
                if(vm.showComment) {
                    return true;
                }
                else {
                    return false;
                }
            };
            
            vm.scrollDown = function () {
                var h = screen.availHeight;
                var w = screen.availWidth;
                scrollTo(w,h);
            };

            vm.pushComment = function (comment) {
                vm.comments.push({
                    name: "Jennifer Jordan",
                    date: new Date(),
                    comment: comment
                });
            };

            vm.shouldAdd = function ()
            {
                vm.should = !vm.should;
                return vm.should;
            }

            vm.addComment = function (comment)
            {
                vm.pushComment(comment);
                vm.scrollDown();
            }

            vm.users = [
                { id: 2, firstName: "John", lastName: "Lacy", beginningDate: "April 15, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "20", votesPlaced: "67" },
                { id: 3, firstName: "Adam", lastName: "Spencer", beginningDate: "August 9, 1995", retiredDate: "Active", motionsRaised: "18", motionsSeconded: "54", votesPlaced: "132" },
                { id: 5, firstName: "Schuyler", lastName: "Evans", beginningDate: "January 15, 2012", retiredDate: "Active", motionsRaised: "15", motionsSeconded: "16", votesPlaced: "45" },
                { id: 6, firstName: "Nick", lastName: "Scurfield", beginningDate: "November 1, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "23", votesPlaced: "34" },
                { id: 7, firstName: "Megan", lastName: "Brothers", beginningDate: "February 15, 2011", retiredDate: "Active", motionsRaised: "34", motionsSeconded: "7", votesPlaced: "21" },
            ];
            vm.motions = [];
            vm.activeMotions = [
                { id: 1, title: "TX SB 154", raisedBy: "John Lacy", dateBeginning: "11/9/2015", allowSecond: true, seconded: true, secondedBy: "Schuyler Evans", periodEnd: "11/16/2015", yea: 3, nay:1, allowVote: true, yeaList: ["Adam Spencer","Alex Prejean","Catherine Ruff"], nayList: ["Megan Brothers"], description: motionService.description },
                { id: 2, title: "TX SB 157", raisedBy: "Nick Scurfield", dateBeginning: "11/11/2015", allowSecond: true, seconded: false, periodEnd: "11/15/2015", yea: 0, nay: 0, allowVote: false, yeaList: [], nayList: [], description: motionService.description },
                { id: 3, title: "TX SB 158", raisedBy: "Megan Brothers", dateBeginning: "11/11/2015", allowSecond: true, seconded: false, periodEnd: "11/15/2015", yea: 0, nay: 0, allowVote: false, yeaList: [], nayList: [], description: motionService.description },
                { id: 4, title: "TX SB 172", raisedBy: "Adam Spencer", dateBeginning: "11/14/2015", allowSecond: false, seconded: false, periodEnd: "11/21/2015", yea: 0, nay: 0, allowVote: false, yeaList: [], nayList: [], description: motionService.description },
            ];

            vm.changeSecond = function (motion) {
                motion.seconded = true;
                motion.allowVote = true;
                motion.secondedBy = "Jennifer Jordan";
            };

            vm.voteYes = function (motion) {
                motion.yea++;
                motion.allowVote = false;
                motion.yeaList.push("Jennifer Jordan");
            }
            vm.voteNo = function (motion) {
                motion.nay++;
                motion.allowVote = false;
                motion.nayList.push("Jennifer Jordan");
            }

            vm.func = function (motion) {
                vm.currentMotion = motion;
            };

            vm.funcBack = function () {
                vm.currentMotion = "none";
            };
            
            //------------------

            vm.getList = function () {
                motionService.list(function (data) {
                    vm.motions = data;
                });
            };

            vm.getList();

            vm.getMotion = function () {
                motionService.getMotion(vm.currentMotion, function (data) {
                    vm.selectedMotion = data;   
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