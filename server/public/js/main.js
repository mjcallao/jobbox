   var miapp = angular.module('miapp', ['ui.router']);
    miapp.config(function($stateProvider, $urlRouterProvider) {

       
         $urlRouterProvider.otherwise("/estado1");
        $stateProvider
            .state('estado1', {
                url: "/estado1",
                templateUrl: "plantilla1.html",
                
                controller: 'a'
            })
            .state('estado2', {
                url: "/estado2",
                templateUrl: "plantilla2.html"
            })
            .state('estado3', {
                url: "/estado3",
                templateUrl: "plantilla3.html"
            }) 

    });