'use strict';

var app = angular.module('portifolio', ['ngRoute', 'ui.bootstrap', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: '../views/home.html',
        controller: 'homeController'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
'use strict';

app.controller('homeController', ['$scope', function ($scope) {}]);
'use strict';

app.controller('mapController', ['$scope', 'baseRest', '$mdDialog', function ($scope, baseRest, $mdDialog) {

    var map = new classService.ol3MapInstace();
    var baseUrl = window.location.host;

    map.generateDefaulMap();

    // mapApi.get({ url: '/points' }).then(data => {

    //     _(data.data).each(point => {
    //         if (point.position) {
    //             map.addPoint(point.position);
    //         }
    //     });
    // });
}]);
'use strict';

app.directive('home', ['$location', function ($location) {

    return {
        restrict: 'AE',
        templateUrl: '../partials/home.html'
    };
}]);
'use strict';

app.factory('baseRest', ['$http', function ($http) {

    return {
        dataService: function dataService(baseUrl) {
            return {
                get: function get(params) {
                    return $http.get(baseUrl + params.url, { cache: false });
                },
                post: function post(params) {
                    return $http.post(baseUrl + params.url, params.data, { cache: false });
                },
                put: function put(params) {
                    return $http.put(baseUrl + params.url, { cache: false });
                },
                delete: function _delete(params) {
                    return $http.delete(baseUrl + params.url, { cache: false });
                }
            };
        }
    };
}]);
'use strict';

app.service('classService', [function () {}]);