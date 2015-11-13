(function() {
    angular.module("VotingApp")
        .service('motionService', function ($resource, $http) {
            var self = this;

            var MotionAPI = $resource('/api/motions/:id');

            self.list = function () {
                return MotionAPI.query();
            };

            self.add = function (motion, callback) {
                $http.post('api/Motions', motion)
                .then(function() {
                    var newMotion = new MotionAPI({
                        title: motion.title,
                        description: motion.description,
                        created: motion.created
                    });
                    // POST was creating two DB entries until this was commented out
                    //newMotion.$save(callback);
                });
            };

            self.update = function (motion) {
                motion.wasEdited = true;
                motion.$save();
            };


        });
})();