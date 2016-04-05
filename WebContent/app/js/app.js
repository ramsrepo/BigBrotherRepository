'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module( 'myApp', [ 'ui.router', 'ui.bootstrap', 'xeditable',
		  'myApp.filters', 
		  'myApp.services', 
		  'myApp.directives',
		  'myApp.controllers' ])
		  
myApp.config(function($httpProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
});

//Applying bootstrap theme for angularjs-xeditable fields, 
//as they are in default browser theme.
//bootstrap3 theme. Can be also 'bs2', 'default'
myApp.run(function(editableOptions) {
	  editableOptions.theme = 'bs3'; 
});

myApp.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/view1');

			$stateProvider.state('view1', {
				url : '/view1',
				templateUrl : 'app/partials/partial1.html',
				controller : 'homeController'
			})
			
			.state('changepassword', {
				url : '/changepassword',
				templateUrl : 'app/partials/changepassword.html',
				controller : 'passwordController'
			})

			.state('createuser', {
				url : '/createuser',
				templateUrl : 'app/partials/user.html',
				controller : 'userController',
				controllerAs : 'vm',
				resolve : {
					loadUsers : loadUsers
				}
			})

			.state('creategroup', {
				url : '/creategroup',
				templateUrl : 'app/partials/group.html',
				controller : 'groupController',
				resolve : {
					loadUserGroups : loadUserGroups
				}
			})

			.state('dailyreport', {
				url : '/dailyreport',
				templateUrl : 'app/partials/report.html',
				controller : 'reportController'
			})

			.state('trackingtemplate', {
				url : '/trackingtemplate',
				templateUrl : 'app/partials/efforttrackertemplate.html',
				controller : 'effortTrackController',
				resolve : {
					loadApplications : loadApplications,
					loadEfforts : loadEfforts
				}
			});

		} ]);

function loadUsers(userService) {
	return userService.loadUsers();
};

function loadUserGroups(userService) {
	return userService.loadUserGroups();
};

function loadApplications(effortTrackerService) {
	return effortTrackerService.loadApplicationsList();
}

function loadEfforts(effortTrackerService) {
	return effortTrackerService.loadEffortsList();
}
