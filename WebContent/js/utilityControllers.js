'use strict';

/*Controllers*/

var utilityObject = angular.module('pocApp.utilityControllers', ["ui.bootstrap"]);

utilityObject.controller('toolbarController', function($scope, $window, $http){
	
	$scope.saveRecord = function(){
			alert("inside utilityController's saveRecord Method");
	};
	
});