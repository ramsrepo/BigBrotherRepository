'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
   /* .controller('MaverixCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme Guide";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ChartCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Charts";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/chart.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TypeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Typography";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/cutting_pad.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('IconsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Icons";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/box_address.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TablesCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Tables";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/document-plaid-pen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ModalsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Modals";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/fullscreen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ControlsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Controls";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/button_blue_add.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('FormsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Forms";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.$parent.showTopToggle = true;
        $scope.$parent.subNav1 = 0;

    }])*/
    .controller('groupController', function($scope, $window, $http, userService, loadUserGroups) {
    	$scope.$parent.title = "User Groups";
        $scope.$parent.showTopToggle = false;
		$scope.userGroupList = loadUserGroups.data;

					/*
					 * setPaginationForList();
					 * 
					 * function setPaginationForList(data) {
					 * 
					 * $scope.totalUserGroupsList = data;
					 * 
					 * $scope.$watch('currentPage + numPerPage', function() {
					 * var begin = (($scope.currentPage - 1) *
					 * $scope.recordsPerPage) , end = begin +
					 * $scope.recordsPerPage;
					 * 
					 * $scope.userGroupList =
					 * $scope.totalUserGroupsList.slice(begin, end);
					 * 
					 * }); }
					 */

					/*
					 * $scope.saveGroup = function(group) { var responseCatalog =
					 * userService.addUserGroup(group);
					 * responseCatalog.success(function (response) {
					 * setPaginationForList(response); });
					 * responseCatalog.error(function (data,status) { if(status ==
					 * 400 || status == 403) { alert('Error while processing!'); }
					 * }); }
					 * 
					 * $scope.deleteGroup = function(group){ if (confirm("Are
					 * you sure want to delete this User Group ?") == true) {
					 * var responseCatalog = userService.deleteUserGroup(group);
					 * responseCatalog.success(function (response) {
					 * setPaginationForList(response); });
					 * responseCatalog.error(function (data,status) { if(status ==
					 * 400 || status == 403) { alert('Error while processing!'); }
					 * }); }
					 *  }
					 */

	})
    .controller("userController", function($scope, $window , $http, userService, loadUsers){
    	 $scope.$parent.title = "Users";
         $scope.$parent.showTopToggle = false;
    	$scope.userList = loadUsers.data;

					/*
					 * setPaginationForList(loadUsers.data);
					 * 
					 * function setPaginationForList(response) {
					 * 
					 * $scope.totalUsersList = response;
					 * 
					 * $scope.$watch('currentPage + numPerPage', function() {
					 * var begin = (($scope.currentPage - 1) *
					 * $scope.recordsPerPage) , end = begin +
					 * $scope.recordsPerPage;
					 * 
					 * $scope.userList = $scope.totalUsersList.slice(begin,
					 * end);
					 * 
					 * }); }
					 */
	})
	.controller('reportController', function($scope, $window , $http){
		$scope.$parent.title = "Reports";
		$scope.$parent.showTopToggle = false;
		$scope.alertDate = function() {
			alert($scope.selecteddate);
		}	 
	})
    .controller('effortTrackController',function($scope, $window , $http, $filter, effortTrackerService, loadApplications, loadEfforts){
    	$scope.$parent.title = "Effort Tracker Template";
        $scope.$parent.showTopToggle = false;
        
    	$scope.tasks = []; 
    	$scope.updatedTasks = [];
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
    	  
    	  
    	  $scope.updateEffort = function(effort, effortId) {
    		  $scope.updatedTasks.push(effort);
    		  /*alert(JSON.stringify($scope.updatedTasks)+"--------------"+effortId);*/
    	  }
    	  
    	  $scope.deleteTask = function(taskIndexToDelete) {
    		  $scope.tasks.splice(taskIndexToDelete,1);
    	  };
    	  
    	  $scope.saveTemplate = function() {
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
    	  
    })
   .controller('homeController', function($scope, $location) {
	   $scope.$parent.title = "Dashboard";
	   $scope.subNav1 = 0;
	   $scope.isActive = function (viewLocation) {
           return viewLocation === $location.path();
       };
	})
	.controller('passwordController', function($scope, $window, $http, $location) {
		$scope.$parent.title = "Change Password";
	});
