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
				backdrop: true,
		        backdropClick: true,
		        dialogFade: false,
		        keyboard: true,
		        windowClass: "modal fade in",
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

controller('groupController', function($scope, $window, $modal, $http, userService, loadUserGroups) {
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Create Group';
	
	$scope.userGroupList = [], $scope.totalUserGroupsList = []
	  ,$scope.currentPage = 1
	  ,$scope.recordsPerPage = 5
	  ,$scope.itemsPerPage = 5
	  ,$scope.maxSize = 5;
	
	setPaginationForList(loadUserGroups.data);
	
	function setPaginationForList(data) {
	 	
		$scope.totalUserGroupsList = data;
	 	
	    $scope.$watch('currentPage + numPerPage', function() {
		    var begin = (($scope.currentPage - 1) * $scope.recordsPerPage)
		    , end = begin + $scope.recordsPerPage;
		    
		    $scope.userGroupList = $scope.totalUserGroupsList.slice(begin, end);
		    
		});
	}
			  
	$scope.saveGroup = function(group) {
	  var responseCatalog = userService.addUserGroup(group);
		responseCatalog.success(function (response) {
			setPaginationForList(response);
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	}
	
	$scope.deleteGroup = function(group){
	    if (confirm("Are you sure want to delete this User Group ?") == true) {
	    	var responseCatalog = userService.deleteUserGroup(group);
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
	 
}).

controller('reportController', function($scope, $window , $http){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Reports';
	
	 $scope.alertDate = function() {
		 alert($scope.selecteddate);
	 }
	 
	 $("#datetimepicker1").on("dp.change", function() {
	        $scope.selecteddate = $("#selecteddate").val();
	});
	 
	
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
				backdrop: true,
		        backdropClick: true,
		        dialogFade: false,
		        wndowClass: "modal fade in",
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
		 
}).


controller('effortTrackController',function($scope, $window , $http){
	
	var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Effort Template';
	
	$scope.tasks = []; 
	  
	  $scope.addNewTask = function() {
		 
		  if($scope.appSelect === "" || $scope.appSelect === undefined) {
			  alert("Please select Application first");
		  } else {
			  var newItemNo = $scope.tasks.length+1;
			    $scope.tasks.push({'id':'choice'+newItemNo, 'application': $scope.appSelect, 'taskdate': $scope.selecteddate});
		  } 
			  
	    
	  };
	    
	  $scope.removeChoice = function() {
	    var lastItem = $scope.choices.length-1;
	    $scope.choices.splice(lastItem);
	  };
});


