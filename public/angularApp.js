var app = angular.module('portifolio', ['ngRoute']);

app.config(['$routeProvider' ,

    function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: '../views/home.html',
            controller: 'homeController'
        }) ;

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }
]);

