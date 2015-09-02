'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('homeController', function($scope, $window, $http) {
	
	
}).

controller('groupController', function($scope, $window, $modal, $http, shopService) {
	
	
	$scope.open = function() {
	   var modalInstance =  $modal.open({
	      templateUrl: 'addviews/addgroupmember.html',
	      controller: [
                       '$scope', '$modalInstance', function($scope, $modalInstance){
                           $scope.ok = function () {
                               $modalInstance.close();
                           };
                           $scope.cancel = function(){
                        	   $modalInstance.dismiss('cancel');
                           };
                       }
                   ],
	      windowClass: 'modal fade in',
	      backdrop: false,
          keyboard: true
          
	    });
	  };
	 
}).

controller('reportController', function($scope, $window , $http, reportService){
	
	$scope.getUsers = function(){
		var responseCatalog = reportService.getUsers();
		responseCatalog.success(function (response) {
			$scope.groupUsers = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
}).

controller('shopController', function($scope, $window , $http, shopService){
	
	$scope.getUsers = function(){
		var responseCatalog = shopService.getDetails();
		responseCatalog.success(function (response) {
			alert(response);
			$scope.groupUsers = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
});
