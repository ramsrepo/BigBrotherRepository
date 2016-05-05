'use strict';

// Services 

// Demonstrate how to register services
// In this case it is a simple value service.
var myModule = angular.module('myApp.services', []).

factory('httpRequestInterceptor', function() {
	return {
		request : function(config) {
			// use this to destroying other existing headers
			config.headers = {
				'X-CSRF-TOKEN' : $("input[name=_csrf]").val(),
				'Content-Type' : 'application/json;charset=UTF-8'
			};
			return config;
		}
	};
}).

factory('userService', function($http) {

	var userService = {};

	// Service to find all the existing Users.
	userService.loadUsers = function() {
		var theUrl = '/EffortTracker/user/findAll';
		return $http.get(theUrl);
	};

	// Service to Add the New User.
	userService.addUser = function(data) {
		var theUrl = '/EffortTracker/user/add';
		return $http.post(theUrl, data);
	};

	// Service to Delete the Existing User.
	userService.deleteUser = function(data) {
		var theUrl = '/EffortTracker/user/delete';
		return $http.post(theUrl, data);
	};
	
	// Service to find all the existing Users based on User Group Code.
	userService.loadUsersByGroup = function(data) {
		var theUrl = '/EffortTracker/user/findUsersByGroup';
		return $http.post(theUrl,data);
	};	

	// Service to find all the existing User Groups.
	userService.loadUserGroups = function() {
		var theUrl = '/EffortTracker/group/findAll';
		return $http.get(theUrl);
	};
	
	// Service to Add the User Group.
	userService.addUserGroup = function(data) {
		var theUrl = '/EffortTracker/group/add';
		return $http.post(theUrl, data);
	};

	// Service to Delete the Existing Group.
	userService.deleteUserGroup = function(data) {
		var theUrl = '/EffortTracker/group/delete';
		return $http.post(theUrl, data);
	};

	return userService;
}).

factory('effortTrackerService', function($http) {

	var effortTrackerService = {};

	// Service to Get all the Tower based applications.
	effortTrackerService.loadApplicationsList = function() {
		var theUrl = '/EffortTracker/eft/findAllApps';
		return $http.get(theUrl);
	};

	// Service to Get all the Tower based applications.
	effortTrackerService.loadEffortsList = function() {
		var theUrl = '/EffortTracker/eft/findAllEfforts';
		return $http.get(theUrl);
	};

	// Service to Get all the Tower based applications.
	effortTrackerService.saveEfforts = function(postData) {
		var theUrl = '/EffortTracker/eft/saveEfforts';
		return $http.post(theUrl, postData);
	};
	
	// Service to Get all the Tower based applications.
	effortTrackerService.updateEfforts = function(postData) {
		var theUrl = '/EffortTracker/eft/updateEfforts';
		return $http.post(theUrl, postData);
	};


	return effortTrackerService;

}).

factory('reportService', function($http) {
	
	var reportService = {};

	return reportService;
});
