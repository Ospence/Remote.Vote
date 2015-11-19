(function () {
    angular.module('VotingApp')
        .controller('commentController', function (commentService, userService, $location) {
            var vm = this;

            vm.comment = commentService.list();

            vm.add = function () {
                commentService.add(vm.Comment, function (result) {
                    vm.comment.push(result);
                    $('#addComment')[0].reset();
                });
            };

            vm.update = function (comment) {
                commentService.update(comment);
            }

            vm.edit = function (comment){
                commentService.update(comment);

}
    });
})();