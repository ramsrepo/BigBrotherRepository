'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('dashboardController', function($scope, $window, $modal, $http){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Dashboard';
	
}).

controller('settingsController', function($scope, $window, $modal, $http){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Change Password';
	
}).

controller('homeController', function($scope, $window, $modal, $http) {
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Dashboard';
	
	$scope.customer = {
		    name: 'Sriam Ghanta',
		    age: '29'
	};
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
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Create Group';
	 
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

controller('reportController', function($scope, $window , $http){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Reports';
	
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

controller("userController", function($scope, $window , $http, $modal, userService, loadUsers){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'User';
	
	$scope.userList = [], $scope.totalUsersList = []
	  ,$scope.currentPage = 1
	  ,$scope.recordsPerPage = 10
	  ,$scope.itemsPerPage = 10
	  ,$scope.maxSize = 5;
	
	setPaginationForList(loadUsers.data);
	
	function setPaginationForList(response) {
	 	
		$scope.totalUsersList = response;
	 	
	    $scope.$watch('currentPage + numPerPage', function() {
		    var begin = (($scope.currentPage - 1) * $scope.recordsPerPage)
		    , end = begin + $scope.recordsPerPage;
		    
		    $scope.userList = $scope.totalUsersList.slice(begin, end);
		    
		});
	}
	
	$scope.createOrEditUser = function(user) {
		var modalInstance = $modal.open({
				templateUrl : 'popups/popupuser.html',
				windowClass : 'modal in',
				backdrop: true,
		        keyboard: true,
		        controllerAs : 'userVm',
				controller : ['$scope', '$modalInstance', 'editUserData', 'userService', 
				              	function($scope, $modalInstance, editUserData, userService) {
									 				var userVm = this;
									 				userVm.cancel = cancel;
									 				userVm.addUser = addUser;
									 				userVm.user = editUserData;
										        	 
													 function cancel(modalResponse) {
														 $modalInstance.dismiss('cancel');
													 }
													 
													 function addUser(user){
															
														var responseCatalog = userService.addUser(user);
														responseCatalog.success(function (response) {
															$modalInstance.close(response);
														});
														responseCatalog.error(function (data,status) {
															if(status == 400 || status == 403) {
																alert('Error while processing!');
															}
														});
													};
					           
                            
              									}
				              ],
				resolve: {
                  editUserData: function () {
                    return user;
                  }
                }
				 
				});
		
			modalInstance.result.then(function(response){
				setPaginationForList(response);
			});
		
		}
	
	$scope.deleteUser = function(user){
	    if (confirm("Are you sure want to delete the user ?") == true) {
	    	var responseCatalog = userService.deleteUser(user);
			responseCatalog.success(function (response) {
				setPaginationForList(response);
			});
			responseCatalog.error(function (data,status) {
				if(status == 400 || status == 403) {
					alert('Error while processing!');
				}
			});
	    }
		
	}
		 
});
