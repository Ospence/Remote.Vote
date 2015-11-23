(function () {

    angular.module('VotingApp')
        .service('userService', ['$resource', '$http', function ($resource, $http) {
            var self = this;

            var UserAPI = $resource('/api/user/:id');

            // add each user type

            // make each function for each user type

            self.list = function (callback) {
                //return UserAPI.query();
            return users = [
                { id: 1, firstName: "Sarah", lastName: "Smith", beginningDate: "March 1, 2014", retiredDate: "June 15, 2015", motionsRaised: "9", motionsSeconded: "5", votesPlaced: "4" },
                { id: 1, firstName: "John", lastName: "Lacy", beginningDate: "April 15, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "20", votesPlaced: "67" },
                { id: 1, firstName: "Adam", lastName: "Spencer", beginningDate: "August 9, 1995", retiredDate: "Active", motionsRaised: "18", motionsSeconded: "54", votesPlaced: "132" },
                { id: 1, firstName: "Russell", lastName: "Sparks", beginningDate: "November 21, 2014", retiredDate: "November 21, 2015", motionsRaised: "8", motionsSeconded: "10", votesPlaced: "34" },
                { id: 1, firstName: "Schuyler", lastName: "Evans", beginningDate: "January 15, 2012", retiredDate: "Active", motionsRaised: "15", motionsSeconded: "16", votesPlaced: "45" },
                { id: 1, firstName: "Nick", lastName: "Scurfield", beginningDate: "November 1, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "23", votesPlaced: "34" },
                { id: 1, firstName: "Megan", lastName: "Brothers", beginningDate: "February 15, 2011", retiredDate: "Active", motionsRaised: "34", motionsSeconded: "7", votesPlaced: "21" },
                { id: 1, firstName: "Alex", lastName: "Prejean", beginningDate: "May 3, 2012", retiredDate: "June 15, 2015", motionsRaised: "16", motionsSeconded: "45", votesPlaced: "37" },
                { id: 1, firstName: "Jennifer", lastName: "Jordan", beginningDate: "April 14, 2015", retiredDate: "Active", motionsRaised: "22", motionsSeconded: "2", votesPlaced: "17" },
                { id: 1, firstName: "Catherine", lastName: "Ruff", beginningDate: "May 5, 2010", retiredDate: "January 12, 2015", motionsRaised: "5", motionsSeconded: "34", votesPlaced: "56" },
        ];
                    callback(users);
                } 
            


        self.userlist = function (callback) {
            //return UserAPI.query();
            var usersList = [
                { id: 1, firstName: "Sarah", lastName: "Smith", beginningDate: "March 1, 2014", retiredDate: "June 15, 2015", motionsRaised: "9", motionsSeconded: "5", votesPlaced: "4" },
                { id: 1, firstName: "John", lastName: "Lacy", beginningDate: "April 15, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "20", votesPlaced: "67" },
                { id: 1, firstName: "Adam", lastName: "Spencer", beginningDate: "August 9, 1995", retiredDate: "Active", motionsRaised: "18", motionsSeconded: "54", votesPlaced: "132" },
                { id: 1, firstName: "Russell", lastName: "Sparks", beginningDate: "November 21, 2014", retiredDate: "November 21, 2015", motionsRaised: "8", motionsSeconded: "10", votesPlaced: "34" },
                { id: 1, firstName: "Schuyler", lastName: "Evans", beginningDate: "January 15, 2012", retiredDate: "Active", motionsRaised: "15", motionsSeconded: "16", votesPlaced: "45" },
                { id: 1, firstName: "Nick", lastName: "Scurfield", beginningDate: "November 1, 2013", retiredDate: "Active", motionsRaised: "12", motionsSeconded: "23", votesPlaced: "34" },
                { id: 1, firstName: "Megan", lastName: "Brothers", beginningDate: "February 15, 2011", retiredDate: "Active", motionsRaised: "34", motionsSeconded: "7", votesPlaced: "21" },
                { id: 1, firstName: "Alex", lastName: "Prejean", beginningDate: "May 3, 2012", retiredDate: "June 15, 2015", motionsRaised: "16", motionsSeconded: "45", votesPlaced: "37" },
                { id: 1, firstName: "Jennifer", lastName: "Jordan", beginningDate: "April 14, 2015", retiredDate: "Active", motionsRaised: "22", motionsSeconded: "2", votesPlaced: "17" },
                { id: 1, firstName: "Catherine", lastName: "Ruff", beginningDate: "May 5, 2010", retiredDate: "January 12, 2015", motionsRaised: "5", motionsSeconded: "34", votesPlaced: "56" },
            ];
            callback(usersList);
        }


            self.add = function (user, callback) {
                $http.post('api/Account/Register', user)
                    .then(function () {
                        var newUser = new UserAPI({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userName: user.userName,
                            phoneNumber: user.phoneNumber,
                            email: user.userName,
                            password: user.password,
                            passwordConfirmed: user.passwordConfirmed
                        });
                        newUser.$save(callback);
                    });
            };

            self.update = function (user) {
                user.$save();
            };
            
        }]);
})();