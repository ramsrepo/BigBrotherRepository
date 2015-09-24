'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('homeController', function($scope, $window, $http) {
	
	
}).

controller('groupController', function($scope, $window, $modal, $http) {
	
	$scope.showMember = function(popDivId){
		var popDivObject = $("#"+popDivId);
		var pageUrl = "popups/addgroupmember.html";
		showPopUp(popDivObject, pageUrl,"Add Group Member"); 
	};
	
	function save(){
		alert('Inside save');
	}
	
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
	
	  $scope.today = function() {
	    $scope.dt = new Date();
	  };
	 
	  $scope.today();

	  $scope.clear = function () {
	    $scope.dt = null;
	  };

	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	  };

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };
	  $scope.toggleMin();

	  $scope.open = function($event) {
	    $scope.status.opened = true;
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];

	  $scope.status = {
	    opened: false
	  };
	
});
