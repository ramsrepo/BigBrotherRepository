/*Services*/

angular.module('pocApp.services',[]).

factory('userService', function($http){

	var userService = {};
	
	// Service to find all the existing Users.
	userService.loadUsers = function() { 
		var theUrl = '/BigB/user/findAll';
		return $http.get(theUrl);
	};
	
	// Service to Create the New User.
	userService.addUser = function(data) { 
		var theUrl = '/BigB/user/add';
		return $http.post(theUrl, data);
	};
	
	// Service to Delete the Existing User.
	userService.deleteUser = function(data) { 
		alert(JSON.stringify(data));
		var theUrl = '/BigB/user/delete';
		return $http.post(theUrl, data);
	};
	
	return userService;
});

