(function () {
    angular.module("VotingApp", ['ngRoute', 'ui.bootstrap', 'ngResource', 'ngAnimate'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            /*
                .when('url/:urlParam1', {
                    templateUrl: '/url/to/template.html',
                    controller: 'BlahController',
                    controllerAs: 'vm'
                })
            */
            //.when('/', {
            //    templateUrl: '/ngViews/',
            //    controller: 'userController',
            //    controllerAs: 'vm'
            // })

            .when('/', {
                templateUrl: '/ngViews/TestView.html',
                controller: 'userController',
                controllerAs: 'vm'
            })
            .when('/adminpage', {
                templateUrl: '/ngViews/AdminView.html',
                controller: 'cAdminController',
                controllerAs: 'vm'
            })

            .when('/createmotion', {
                templateUrl: '/ngViews/MotionTest.html',
                controller: 'motionController',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/ngViews/loginTest.html',
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .when('/role', {
                templateUrl: '/ngViews/Role.html',
                controller: 'cAdminController',
                controllerAs: 'vm'
            })

            .when('/register', {
                templateUrl: '/ngViews/registerTest.html',
                controller: 'registerController',
                controllerAs: 'vm'
            })
            .when('/TestView', {
                templateUrl: '/ngViews/TestView.html',
                controller: 'userController',
                controllerAs: 'vm'
            })

            .when('/TextView3', {
                templateUrl: '/ngViews/TextView3.html',
                controller: 'userController',
                controllerAs: 'vm'
            })

            .when('/frontpage', {
                templateUrl: '/ngViews/FrontPage.html',
                controller: 'userController',
                controllerAs: 'vm'
            })

            .when('/getstarted', {
                templateUrl: '/ngViews/GetStarted.html',
                controller: 'userController',
                controllerAs: 'vm'
            })

            .when('/meettheteam', {
                templateUrl: '/ngViews/MeetTheTeam.html',
                controller: 'userController',
                controllerAs: 'vm'
            })

            .when('/motionsview', {
                templateUrl: '/ngViews/Chairman.html',
                controller: 'motionController',
                controllerAs: 'vm'
            })
            .when('/comment', {
                templateUrl: '/ngViews/Comment.html',
                controller: 'commentController',
                controllerAs: 'vm'
            })

            .when('/motionhistory', {
                templateUrl: '/ngViews/ActiveInactiveTest.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })
            .when('/motion120', {
                templateUrl: '/ngViews/Motion1.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })
            .when('/chat', {
                templateUrl: '/ngViews/Chat.html',
                controller: 'chatContoller',
                controllerAs: 'vm'
            })


            .when('/userhistory', {
                templateUrl: '/ngViews/UserHistory.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })

            .when('/id1motionsraised', {
                templateUrl: '/ngViews/userMotionHistory.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })

            .when('/id1motionsseconded', {
                templateUrl: 'ngViews/userMotionsSeconded.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })
            .when('/id1motionsvoted', {
                templateUrl: '/ngViews/votesPlaced.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })
            .otherwise({
                templateUrl: '/ngViews/notFound.html'
            })
        }]);
})();