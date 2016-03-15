'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('dashboardController', function($scope, $window, $modal, $http){
	
	
}).

controller('settingsController', function($scope, $window, $modal, $http){
	
	/*var selectedPage = angular.element($("#pageheader")).scope();
	selectedPage.page = 'Change Password';*/
	
}).

controller('homeController', function($scope, $window, $modal, $http) {
	
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
    
}).

controller('groupController', function($scope, $window, $modal, $http, userService, loadUserGroups) {
	
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
	
	$scope.alertDate = function() {
		 alert($scope.selecteddate);
	}	 
	
}).	

controller("userController", function($scope, $window , $http, $modal, userService, loadUsers){
	
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


controller('effortTrackController',function($scope, $window , $http, $filter, effortTrackerService, loadApplications, loadEfforts){
	
	$scope.tasks = []; 
	$scope.selecteddate = new Date();
	$scope.noOfTasks = 1;
	$scope.applicationList = loadApplications.data;
	$scope.effortList = loadEfforts.data;
	
	$scope.activityList = [ { value:'Minor Enhancement', activityName: 'Minor Enhancement'}, 
	                        { value:'Incident Resolution', activityName: 'Incident Resolution'}, 
	                        { value:'Preventive Maintenance', activityName: 'Preventive Maintenance'}, 
	                        { value:'Problem Resolution', activityName: 'Problem Resolution'}, 
	                        { value:'Admin / Training', activityName: 'Admin / Training'}, 
	                        { value:'Leave', activityName: 'Leave'} 
	                      ];
	
	$scope.refreshEfforts = function() {
		var responseCatalog = effortTrackerService.loadEffortsList();
		responseCatalog.success(function (response) {
			$scope.effortList = response;
			$scope.tasks.length = 0;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while getting Efforts!');
			}
		});
	}
	
	$scope.addNewTask = function() {
		
		if($scope.selecteddate === "" || $scope.selecteddate === undefined) {
			alert("Please select Activity Date first");
		} else {
			var weekNumber = getWeekInaMonth(new Date($scope.selecteddate).getMonth(), new Date($scope.selecteddate).getDate());
			for(var i=0;i<$scope.noOfTasks;i++) {
				$scope.tasks.push({ 'appCode': '',
					'activity': '',
					'activityDate': $scope.selecteddate,
					'week': weekNumber,
					'spentHours': '',
					'comments': ''});
			}
		} 
	  };
	  
	  
	  $scope.updateEffort = function(effort) {
		  alert("Updated Effort: "+ JSON.stringify(effort));
	  }
	  
	  $scope.deleteTask = function(taskIndexToDelete) {
		  $scope.tasks.splice(taskIndexToDelete,1);
	  };
	  
	  $scope.saveTemplate = function() {
		  alert(JSON.stringify($scope.tasks));
		 if($scope.tasks.length>0) {
			 var responseCatalog = effortTrackerService.saveEfforts($scope.tasks);
				responseCatalog.success(function (response) {
					$scope.effortList = response;
					$scope.tasks.length = 0;
				});
				responseCatalog.error(function (data,status) {
					if(status == 400 || status == 403) {
						alert('Error while processing!');
					}
				});
		 } else {
			 alert("Please add effort to Save");
		 }
		  
	  };
	  
});


 function getWeekInaMonth(month, day) {
 	var weekNumber = Math.ceil((day + 1)/7)
    return weekNumber;
}
 
