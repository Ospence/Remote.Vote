(function () {

    angular.module('VotingApp')
        .service('commentService', ['$resource', '$http', function ($resource, $http) {
            var self = this;

            var UserAPI = $resource('/api/comments/:id');

            self.list = function () {
                return UserAPI.query();
            };

            self.add = function (comment, callback) {
                var newComment = new Comment({
                    title: comment.title,
                    discussion: comment.discussion
                });
                newMovie.$save(callback);
            };

            self.update = function (comment) {
                comment.$save();
            }

            //self.edit = function (comment) {
            //    comment.$save();
            //}
        }]);
})();