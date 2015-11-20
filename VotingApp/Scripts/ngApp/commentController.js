(function () {
    angular.module('VotingApp')
        .controller('commentController', function (commentService, userService, $location) {
            var vm = this;

            vm.comments = commentService.list();
            vm.comment;

            vm.add = function () {
                commentService.add(vm.comment, function (result) {
                    console.log(result)
                    console.log(result.data);
                    vm.comments.push(result);
                    $('#addComment')[0].reset();
                });
            };

            vm.update = function (comment) {
                commentService.update(comment);
            }

            vm.edit = function (comment) {
                commentService.update(comment);


                var comment = [];
                vm.addComment = function () {
                    
                }

            }





        });
})();