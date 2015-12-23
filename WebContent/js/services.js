/*Services*/

angular.module('pocApp.services',[]).

factory('userService', function($http){

	var userService = {};
	
	// Service to Create the New User.
	userService.addUser = function(data) { 
		var theUrl = '/BigB/user/add';
		return $http.post(theUrl, data);
	};
	
	// Service to find all the existing Users.
	userService.loadUsers = function() { 
		var theUrl = '/BigB/user/findAll';
		return $http.get(theUrl);
	};
	
	return userService;
});

