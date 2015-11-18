(function() {
    angular.module("VotingApp")
        .service('motionService', function ($resource, $http) {
            var self = this;

            self.list = function (callback) {
                $http.get('/api/Motions')
                .then(function (data) {
                    callback(data);
                });
            };

            self.getMotion = function (id, callback) {
                
                $http.get('/api/Motions/' + id)
                .then(function (data) {
                    callback(data.data);
                });
            };

            self.add = function (newMotion, callback) {
                $http.post('/api/Motions', newMotion)
                .then(function (result) {
                    callback(result);
                });
            };

            self.addVote = function (vote, callback) {
                $http.post('/api/Votes', vote)
                .then(function (data) {
                    callback(data.data);
                });
            };

            self.update = function (motion, set){
                for (var i = 0; i < set.length; i++)
                {
                    if(set[i].id == motion.id)
                    {
                        set[i] = motion;
                    }
                }
            };

            self.edit = function (motion, callback) {
                $http.post('/api/Motions/Edit', motion)
                .then(function (result) {
                    callback(result);
                });
            };

            self.allowSecond = function (motion, callback) {
                $http.post('/api/Motions/AllowSecond', motion)
                .then(function (result) {
                    callback(result);
                });
            };

            self.secondMotion = function (motion, callback) {
                if (motion.allowSecond == true) {
                    $http.post('/api/Motions/PostSecond', motion)
                    .then(function (data) {
                        callback(data.data);
                    });
                }
                else {
                    console.log("Seconding not yet allowed");
                }
            };

            //^^^^^^^^^^^^^^^^DONE^^^^^^^^^^^^^^^^^
            //-------------------------------------
            //\/\/\/\/\/\/\/NOT DONE\/\/\/\/\/\/\/
            // waiting on comment controller/service
            //____________________________________

            //self.killMotion = function (motion, reason, callback) {
            //    $http.post('/api/Motions/KillMotion', motion, reason)
            //    .then(function (data) {
            //        data.comments.add(reason);
            //        callback();
            //    });
            //};
        });
})();