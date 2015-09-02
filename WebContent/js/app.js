'use strict';

var pocApp = angular.module('pocApp', ['ui.router', 'ui.bootstrap', 'pocApp.controllers', 'pocApp.services', 'pocApp.directives']);
/*
 * This is the old configuration for routing
 * 
pocApp.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	  	when('/changepassword', { templateUrl: 'partials/changepassword.html', controller: 'homeController' }).
	  	when('/createuser', { templateUrl: 'partials/user.html', controller: 'userController' }).
	  	when('/report', { templateUrl: 'partials/report.html', controller: 'reportController' }).
	  	otherwise({ redirectTo: 'home.html' });
}]);*/

	pocApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/');
 
    $stateProvider
	    .state('changepassword', {
            url:'/changepassword',
            templateUrl: 'partials/changepassword.html',
            controller: 'homeController'
        })
        .state('createuser', {
            url:'/createuser',
            templateUrl: 'partials/user.html', 
            controller: 'userController'
        })
        
        .state('creategroup', {
            url:'/creategroup',
            templateUrl: 'partials/group.html', 
            controller: 'groupController'
        })
        
       /* .state('dailyreport', {
            url:'/report',
            templateUrl: 'partials/report.html', 
            controller: 'reportController'
        })*/
    
    	.state('shopreport', {
    		 url:'/report',
             templateUrl: 'partials/report.html', 
             controller: 'shopController'
    	});
        
}]);