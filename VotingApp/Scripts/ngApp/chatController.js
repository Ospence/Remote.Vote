(function (){

    angular.module("VotingApp")
       .controller("chatContoller", function ($scope, $location, $http) {
           
            var self = this;

         //  var Comment = $resource('/api/Comments/:id');

           //self.list = function () {
           //    return Comment.query();
           //};

           $http.get('http://api.randomuser.me/0.4/?results=20').success(function (data) {
               $scope.users = data.results;
               $('#loader').hide();
               $('#userList').show();
           }).error(function (data, status) {
               alert('get data error!');
           });

           

           $scope.showUserModal = function (idx) {
               var user = $scope.users[idx].user;
               $scope.currUser = user;
               $('#myModalLabel').text(user.name.first
                    + ' ' + user.name.last);
               $('#myModal').modal('show');
           }

           $scope.Post = function () {

               $http.post('/api/Comments/:id').success(function (data) {

                   var newUser = data.results[0];
                   newUser.user.text = $('#inputText').val();
                   newUser.date = new Date();
                   $scope.users.push(newUser);

               }).error(function (data, status) {

                   alert('get data error!');

               });

           }

       })
    
})();