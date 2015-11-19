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
                    content: comment.content,
                   
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