'use strict';

var pocApp = angular.module('pocApp', [ 'ui.router', 'ui.bootstrap',
		'pocApp.controllers', 'pocApp.utilityControllers', 'pocApp.services',
		'pocApp.directives' ]);

pocApp.config(function($httpProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
});

pocApp.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/dashboard');

			$stateProvider.state('dashboard', {
				url : '/dashboard',
				templateUrl : 'partials/dashboard.html',
				controller : 'dashboardController'
			})

			.state('changepassword', {
				url : '/changepassword',
				templateUrl : 'partials/changepassword.html',
				controller : 'settingsController'
			})

			.state('createuser', {
				url : '/createuser',
				templateUrl : 'partials/user.html',
				controller : 'userController',
				controllerAs : 'vm',
				resolve : {
					loadUsers : loadUsers
				}
			})

			.state('creategroup', {
				url : '/creategroup',
				templateUrl : 'partials/group.html',
				controller : 'groupController',
				resolve : {
					loadUserGroups : loadUserGroups
				}
			})

			.state('dailyreport', {
				url : '/dailyreport',
				templateUrl : 'partials/report.html',
				controller : 'reportController'
			})

			.state('trackingtemplate', {
				url : '/tracking',
				templateUrl : 'partials/efforttrackertemplate.html',
				controller : 'effortTrackController',
				resolve : {
					loadApplications : loadApplications
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