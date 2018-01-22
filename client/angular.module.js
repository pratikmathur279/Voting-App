(function () {
    'use strict';

    angular
        .module('votingApp', ['ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleRun.$inject = [];

    function moduleRun() {
        console.log("app started");
    }

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'MainController',
                controllerAs: 'mainVm'
            })
            .when('/snacks', {
                templateUrl: 'snacks-view.html',
                controller: 'MainController',
                controllerAs: 'mainVm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
