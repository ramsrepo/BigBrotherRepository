'use strict';

var pocApp = angular.module('pocApp', ['ui.router', 'ui.bootstrap', 'pocApp.controllers', 'pocApp.utilityControllers', 'pocApp.services', 'pocApp.directives']);
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
    
	$urlRouterProvider.otherwise('/dashboard');
 
    $stateProvider
	    .state('dashboard', {
	        url:'/dashboard',
	        templateUrl: 'partials/dashboard.html',
	        controller: 'dashboardController'
	    })
    
    	.state('changepassword', {
            url:'/changepassword',
            templateUrl: 'partials/changepassword.html',
            controller: 'settingsController'
        })
        
        .state('createuser', {
            url:'/createuser',
            templateUrl: 'partials/user.html', 
            controller: 'userController',
            controllerAs: 'vm',
            resolve: {
                loadUsers: loadUsers
            }
        })
        
        .state('creategroup', {
            url:'/creategroup',
            templateUrl: 'partials/group.html', 
            controller: 'groupController',
            resolve: {
            	loadUserGroups: loadUserGroups
            }
        })
        
        .state('dailyreport', {
            url:'/dailyreport',
            templateUrl: 'partials/report.html', 
            controller: 'reportController'
        })
        
        .state('enroll', {
            url:'/enroll',
            templateUrl: 'partials/enrollment.html', 
            controller: 'enrollController'
        });
        
}]);
	
	function loadUsers(userService){
		return userService.loadUsers();
	};
	
	function loadUserGroups(userService){
		return userService.loadUserGroups();
	};