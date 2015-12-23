'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('homeController', function($scope, $window, $modal, $http) {
	
	$scope.customer = {
		    name: 'Sriam Ghanta',
		    age: '29'
		  };
	
	
	$scope.one = true; // setting the first div visible when the page loads
	$scope.two = false; // hidden
	$scope.three = false; // hidden

	// Now have three functions that change the ng-show based on the click
	$scope.showOne = function (){
	  $scope.one = true;
	  $scope.two = false;
	  $scope.three = false;
	}

	$scope.showTwo = function (){
	  $scope.one = false;
	  $scope.two = true; // now show this one
	  $scope.three = false;
	}
	
	$scope.getMessage = function() {
        setTimeout(function() {
        	$scope.$apply(function(){
        		 $scope.message = 'Fetched after 2 seconds';
                 console.log('message:'+$scope.message);
        	});
         
        }, 2000);
      }
      
    $scope.getMessage();
	
	$scope.openProfile = function(){
		
		var modalInstance = $modal.open({
				templateUrl : 'popups/favorites.html',
				windowClass : 'smalldialog',
				backdrop: true,
		        keyboard: true,
				controllerAs : 'favroiteVm',
				controller : [
				              '$modalInstance', 
				              function($modalInstance) {
									 var favroiteVm = this;
									 favroiteVm.cancel = cancel;
						        	 function cancel() {
										 $modalInstance.dismiss('cancel');
									 }
					           
                            
              					}
				              ]
				});
		}
		 
}).

controller('groupController', function($scope, $window, $modal, $http) {
	
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
		  
	function save(){
		alert('Inside save');
	}
	
	$scope.openModal = function() {
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
	
}).	

controller("userController", function($scope, $window , $http, userService){
	
	function loadUsers(){
		var responseCatalog = userService.loadUsers();
		responseCatalog.success(function (response) {
			$scope.userList = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
	loadUsers();
	
	$scope.addUser = function(user){
		
		var responseCatalog = userService.addUser(user);
		responseCatalog.success(function (response) {
			$scope.userList = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
	
});
