<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="en" ng-app="myApp" ng-controller="homeController">
<head>
    <meta charset="utf-8">
    <!--chrome webapp- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="E-Tracker">
  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>e_Tracker</title>
    <link href=<c:url value="/static/images/loginPageIcon.png"/> rel="shortcut icon" />

    <!-- Bootstrap core CSS -->
	<link href=<c:url value="/static/lib/bootstrap/css/bootstrap.min.css"/> rel="stylesheet" type="text/css">
	<!-- Bootstrap Theme css -->
	<link href=<c:url value="/static/lib/bootstrap/css/bootstrap-datetime.css"/> rel="stylesheet" type="text/css" >
	<link href=<c:url value="/static/css/bootstrap-custom.css"/> rel="stylesheet" type="text/css" >
	<link href=<c:url value="/static/lib/bootstrap/css/toaster.css"/> rel="stylesheet" type="text/css" >
	<link href=<c:url value="/static/lib/angular-1.4.3/xeditable.css"/> rel="stylesheet" type="text/css" >
	<link href=<c:url value="/static/css/maverix.css"/> rel="stylesheet">
    
</head>
<body>
	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header" style="float: left;">
					<a class="navbar-brand" href="/EffortTracker/home#">e-Tracker</a>
				</div>
				<div class="menu-bar" id="menu">
					<ul id="menu">
					    <li><a href="#">Inbox(143)</a></li>
					   
					    <li>
					        <a href="#">Action Items<span class="caret"></span></a>
					        <ul>
								<li ng-class="{ selected: isActive('/creategroup')}"><a
									ui-sref="creategroup">User Group</a></li>
								<li ng-class="{ selected: isActive('/createuser')}"><a
									ui-sref="createuser"> User</a></li>
								<li ng-class="{ selected: isActive('/trackingtemplate')}"><a
									ui-sref="trackingtemplate"> Effort Tracker Template</a></li>
								<li><a ng-click="toggle('./static/app/partials/user.html','User')">User Demo</a></li>
								<li><a ng-click="toggle('./static/app/partials/changepassword.html','Change Password')">Change Password Demo</a></li>
					        </ul>
					    </li>
					    
					</ul>
				</div>
				<div class="user-bar">
					Hi, Sriram | <a href="#" data-toggle="modal" data-target="#logoutModal" 
									style="outline: none;text-decoration: none;color: #fff; ">Logout</a>
				</div>
			</div>
		</nav>
	</div>
	<div class="bodyContent">
		<div class="sidebar" ng-hide="yesMove">
			<div class="sidebar-navicontainer">
				<div class="sidebar-headbox">
					<span class="sidebar-header">Home</span> <a class="sidebar-toggle">Hide</a>
				</div>
				<ul class="nav">
					<li ng-class="{ selected: isActive('/view1')}">
						<a ui-sref="view1"><span class="entypo-monitor">
							</span> Dashboard <span class="sidebar-badge">4</span> 
						</a>
					</li>
				</ul>
			</div>
			<div class="sidebar-navicontainer">
				<div class="sidebar-headbox">
					<span class="sidebar-header">Activities</span> <a
						class="sidebar-toggle">Hide</a>
				</div>
				<ul class="nav">
					<!-- <li ng-class="{ selected: isActive('/changepassword')}"><a
						ui-sref="changepassword">Change Password</a></li> -->
					<li ng-class="{ selected: isActive('/creategroup')}"><a
						ui-sref="creategroup">User Group</a></li>
					<li ng-class="{ selected: isActive('/createuser')}"><a
						ui-sref="createuser"> User</a></li>
					<li ng-class="{ selected: isActive('/trackingtemplate')}"><a
						ui-sref="trackingtemplate"> Effort Tracker Template</a></li>
					<li ng-class="{ selected: isActive('/status')}"><a
						ui-sref="status">Check Effort Status</a></li>
					<li ng-class="{ selected: isActive('/validateEfforts')}"><a
						ui-sref="validateEfforts">Validate Efforts</a></li>
				</ul>
			</div>

		</div>

		<div class="mainContentDiv" ng-class="{ moveLeft: yesMove }" ng-init="yesMove=false">
			<div class="heading-bar">
				
				<span style="cursor: pointer;" id="hidemenu" ng-click="yesMove=!yesMove" title="Toggle Menu">
					<img ng-src=<c:url value="/static/images/three.png"/> width="30" height="30">
				</span>
				<span class="heading-one" ng-bind="title"></span>
	
				<!-- <div id="top-switch" class="osx-switch" ng-if="showTopToggle">
	        			<span class="osx-switch-label osx-switch-label-active">ON</span>
	        			<span class="osx-switch-label osx-switch-label-inactive">OFF</span>
				        <label class="switch-light switch-candy" onclick="">
				            <input type="checkbox">
				            <a></a>
				        </label>
	   			</div> -->
				<div class="modal bs-example-modal-sm" id="logoutModal" tabindex="-1" role="dialog" aria-hidden="true">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"
									aria-hidden="true">&times;</button>
								<h4 class="modal-title" id="myModalLabel">
									Logout
								</h4>
							</div>
							<div class="modal-body">Are you sure you want to log-out ?</div>
							<div class="modal-footer">
								<a href="/EffortTracker/logout" class="btn btn-default">Logout</a>
							</div>
						</div>
					</div>
				</div>
			</div>
	
			<div class="content">
				<div class="container-fluid container-maverix" ui-view></div>
			</div>
			
			<toaster-container toaster-options="{'time-out': 5000, 'close-button':true}"></toaster-container>
			
            <div pageslide 	ps-open="checked" ps-auto-close="true"
            				ps-key-listener="true" 
            				ps-class="slideWindow panel panel-default" ps-size="350px">
				    <div class="panel-heading" id="demo-right">
				    	<span class="heading-one" ng-bind="slideWindowTitle"></span>
				   	</div>
				    <div class="panel-body">
				    	<div  ng-include="template"></div>
				    </div>
				    <div class="panel-footer">
				    	<button type="button" class="formButtons button pull-right" ng-click="toggle();">Close</button>
				    </div>
            </div>
			
		</div>
		
	</div>


	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src=<c:url value="/static/lib/jquery/jquery-1.10.js"/> ></script>

<!-- Date.js -->
<script src=<c:url value="/static/lib/date/date.js"/> ></script>

<!-- Scripts to support HTML5 date input -->
<script src=<c:url value="/static/lib/date/better-dom.js"/> ></script>
<script src=<c:url value="/static/lib/date/better-i18n-plugin.js"/> ></script>
<script src=<c:url value="/static/lib/date/better-dateinput-polyfill.js"/> ></script>


<!-- AngularJS, Bootstrap & Application related Scripts -->
<script src=<c:url value="/static/lib/angular-1.4.3/angular.js"/> ></script>
<script src=<c:url value="/static/lib/bootstrap/js/bootstrap.min.js"/> ></script>

<script src=<c:url value="/static/lib/bootstrap/js/moment.js"/> ></script>
<script src=<c:url value="/static/lib/bootstrap/js/bootstrap-datetime.js"/> ></script>

<script src=<c:url value="/static/lib/angular-1.4.3/ui-bootstrap-tpls-0.13.3.js"/> ></script>
<script src=<c:url value="/static/lib/angular-1.4.3/angular-ui-router.js"/> ></script>

<!-- Angular Editable Grid -->
<script src=<c:url value="/static/lib/angular-1.4.3/xeditable.js"/> ></script>
<script src=<c:url value="/static/lib/angular-1.4.3/xeditable.min.js"/> ></script>
<script src=<c:url value="/static/lib/underscore.js"/> ></script>

<script src=<c:url value="/static/lib/angular-1.4.3/angular-animate.min.js"/> ></script>
<script src=<c:url value="/static/lib/angular-1.4.3/angular-sanitize.min.js"/> ></script>
<script src=<c:url value="/static/lib/angular-1.4.3/toaster.js"/> ></script>


	
<script src=<c:url value="/static/app/js/app.js"/> ></script>
<script src=<c:url value="/static/app/js/services.js"/> ></script>
<script src=<c:url value="/static/app/js/controllers.js"/> ></script>
<script src=<c:url value="/static/app/js/filters.js"/> ></script>
<script src=<c:url value="/static/app/js/directives.js"/> ></script>
<script src=<c:url value="/static/app/js/pageslide.js"/> ></script>


<script>
    $(document).ready(function () {
        // Sidebar Toggle Button Initialization
        $(".sidebar-toggle").click(function (event) {
            var $nextUl = $(event.target).parents().eq(1).find("ul.nav");
            if (event.target.innerText === "Show") {
                event.target.innerText = "Hide";
            } else {
                event.target.innerText = "Show";
            }
            $nextUl.slideToggle("fast", "swing");
        });
        
       /*  $("#hidemenu").click(function (){
        	if($('.mainContentDiv').hasClass('moveLeft')) {
        		$('.mainContentDiv').removeClass('moveLeft');
        		$('.sidebar').show();
        		
        	} else {
        		$('.sidebar').hide();	
        		$('.mainContentDiv').addClass('moveLeft');
        	}
        }); */

    });
</script>
</body>
</html>
