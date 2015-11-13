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
            //})
            .when('/', {
                templateUrl: '/ngViews/TestView.html',
                controller: 'userController',
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
            .when('/TestView2', {
                templateUrl: '/ngViews/TestView2.html',
                controller: 'userController',
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

            .otherwise({
                templateUrl: '/ngViews/notFound.html'
            })         
        }]);
})();