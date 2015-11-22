(function() {
    angular.module("VotingApp")
        .service('motionService', function ($resource, $http) {
            var self = this;

            self.list = function (callback) {
                $http.get('/api/Motions')
                .then(function (data) {
                    //callback(data); 
                    var motions = [
                       { id: 1, title: "TX SB 120", dateBeginning: "11/8/2015", dateResult: "11/11/2015", passed: true, },
                       { id: 2, title: "TX SB 115", dateBeginning: "10/8/2015", dateResult: "10/13/2015", passed: true, },
                       { id: 4, title: "TX SB 50", dateBeginning: "9/8/2015", dateResult: "9/13/2015", passed: false, },
                       { id: 5, title: "TX SB 75", dateBeginning: "8/8/2015", dateResult: "8/13/2015", passed: false, },
                       { id: 6, title: "TX SB 132", dateBeginning: "7/8/2015", dateResult: "7/13/2015", passed: true, },
                       { id: 7, title: "TX SB 118", dateBeginning: "6/8/2015", dateResult: "6/13/2015", passed: false, },
                       { id: 8, title: "TX SB 116", dateBeginning: "5/8/2015", dateResult: "5/13/2015", passed: true, },
                       { id: 9, title: "TX SB 87", dateBeginning: "4/8/2015", dateResult: "4/13/2015", passed: false, },
                       { id: 10, title: "TX SB 22", dateBeginning: "3/8/2015", dateResult: "3/13/2015", passed: false, },
                       { id: 11, title: "TX SB 198", dateBeginning: "1/8/2015", dateResult: "1/13/2015", passed: true, },

                    


                    
                    ];
                    callback(motions);
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