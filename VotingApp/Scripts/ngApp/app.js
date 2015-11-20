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

            .when('/motion', {
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

            .when('/chairman', {
                templateUrl: '/ngViews/Chairman.html',
                controller: 'motionController',
                controllerAs: 'vm'
            })
            .when('/comment', {
                templateUrl: '/ngViews/Comment.html',
                controller: 'commentController',
                controllerAs: 'vm'
            })

            .when('/ActiveInactiveTest', {
                templateUrl: '/ngViews/ActiveInactiveTest.html',
                controller: 'userContoller',
                controllerAs: 'vm'
            })
            .when('/chat', {
                templateUrl: '/ngViews/Chat.html',
                controller: 'chatContoller',
                controllerAs: 'vm'
            })


            .otherwise({
                templateUrl: '/ngViews/notFound.html'
            })
        }]);
})();