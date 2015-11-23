(function() {
    angular.module("VotingApp")
        .service('motionService', function ($resource, $http) {
            var self = this;

            self.list = function (callback) {
                //$http.get('/api/Motions')
                //.then(function (data) {
                //    //callback(data); 
                //    }
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
                };
            
            self.description = "    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n    Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.\n    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilita; de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.\n    Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.";

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