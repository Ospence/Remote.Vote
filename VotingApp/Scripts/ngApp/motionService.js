(function() {
    angular.module("VotingApp")
        .service('motionService', function ($resource, $http) {
            var self = this;

            self.list = function (callback) {
                $http.get('/api/Motions')
                .then(function(data){
                    callback(data);
                });
            };

            self.getMotion = function (id, callback) {
                $http.get('/api/Motions/' + id)
                .then(function (data) {
                    callback(data);
                });
            };

            self.add = function (motion, callback) {
                $http.post('api/Motions', motion)
                .then(function (result) {
                    result = {
                        title: motion.title,
                        description: motion.description,
                    };
                    callback(result);
                });
            };

            self.addVote = function (vote, callback) {
                $http.post('api/Votes', vote)
                .then(function (data) {
                    data = {
                        yes: vote.yes,
                        onMotionId: vote.onMotionId
                    };
                    callback();
                });
            };

            self.update = function (motion) {
                motion.$save();
            };

            self.edit = function (motion) {
                motion.wasEdited = true;
                motion.$save();
            }

            self.allowSecond = function (motion) {
                motion.allowSecond = true;
                motion.$save();
            };

            self.secondMotion = function (motion, callback) {
                $http.post('/api/Motions/PostSecond', motion)
                .then(function (data) {
                    callback();
                });
            };

            self.killMotion = function (motion, reason, callback) {
                $http.post('/api/Motions/KillMotion', motion, reason)
                .then(function (data) {
                    data.comments.add(reason);
                    callback();
                });
            };
        });
})();