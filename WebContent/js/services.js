/*Services*/

angular.module('pocApp.services',[]).

factory('httpRequestInterceptor', function () {
	  return {
	    request: function (config) {
	      // use this to destroying other existing headers
	      config.headers = { 'X-CSRF-TOKEN' : $("input[name=_csrf]").val(),
	    		  			 'Content-Type': 'application/json;charset=UTF-8' };
	      return config;
	    }
	  };
}).

factory('userService', function($http){

	var userService = {};
	
	// Service to find all the existing Users.
	userService.loadUsers = function() { 
		var theUrl = '/BigB/user/findAll';
		return $http.get(theUrl);
	};
	
	// Service to Add the New User.
	userService.addUser = function(data) { 
		var theUrl = '/BigB/user/add';
		return $http.post(theUrl, data);
	};
	
	// Service to Delete the Existing User.
	userService.deleteUser = function(data) { 
		var theUrl = '/BigB/user/delete';
		return $http.post(theUrl, data);
	};
	
	// Service to find all the existing User Groups.
	userService.loadUserGroups = function() { 
		var theUrl = '/BigB/group/findAll';
		return $http.get(theUrl);
	};
	
	// Service to Add the User Group.
	userService.addUserGroup = function(data) { 
		var theUrl = '/BigB/group/add';
		return $http.post(theUrl, data);
	};
	
	// Service to Delete the Existing Group.
	userService.deleteUserGroup = function(data) { 
		var theUrl = '/BigB/group/delete';
		return $http.post(theUrl, data);
	};
	
	return userService;
}).

factory('effortTrackerService', function($http) {
	
	var effortTrackerService = {};
	
	// Service to Get all the Tower based applications.
	effortTrackerService.loadApplicationsList = function() { 
		var theUrl = '/BigB/eft/findAllApps';
		return $http.get(theUrl);
	};
	
	// Service to Get all the Tower based applications.
	effortTrackerService.saveEfforts = function(postData) {
		var theUrl = '/BigB/eft/saveEfforts';
		return $http.post(theUrl, postData);
	};
	
	return effortTrackerService;
	
});


