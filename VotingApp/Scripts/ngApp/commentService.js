(function () {

    angular.module('VotingApp')
        .service('commentService', ['$resource', '$http', function ($resource, $http) {
            var self = this;

            var UserAPI = $resource('/api/comments/:id');

            self.list = function () {
                return UserAPI.query();
            };

            self.add = function (comm, callback) {
                console.log(comm);
                //comm = new Comment
                //{
                //    content: comm
                //};
                console.log(comm);
                comm.$save(callback(result));
                
            };

            self.update = function (comment) {
                comment.$save();
            }

            //self.edit = function (comment) {
            //    comment.$save();
            //}
        }]);
})();