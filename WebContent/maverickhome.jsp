<!doctype html>
<html lang="en" ng-app="myApp" ng-controller="homeController">
<head>
    <meta charset="utf-8">
    <!--chrome webapp- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="E-Tracker">
  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>e_Tracker</title>

    <!-- Bootstrap core CSS -->
	<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap.min.css">
	<!-- Bootstrap Theme css -->
	<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap-datetime.css">
	<link rel="stylesheet" type="text/css" href="./css/bootstrap-custom.css">
	<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/toaster.css">
	<link rel="stylesheet" type="text/css" href="lib/angular-1.4.3/xeditable.css">
	<link href="css/maverix.css" rel="stylesheet">
    
</head>
<body>
	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header" style="float: left;">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar" aria-expanded="false"
						aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/BigB/inme#">e-Tracker</a>
				</div>
			</div>
		</nav>
	</div>
	<div class="bodyContent">
		<div class="sidebar">
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
					<li ng-class="{ selected: isActive('/changepassword')}"><a
						ui-sref="changepassword">Change Password</a></li>
					<li ng-class="{ selected: isActive('/creategroup')}"><a
						ui-sref="creategroup">User Group</a></li>
					<li ng-class="{ selected: isActive('/createuser')}"><a
						ui-sref="createuser"> User</a></li>
					<li ng-class="{ selected: isActive('/trackingtemplate')}"><a
						ui-sref="trackingtemplate"> Effort Tracker Template</a></li>
					<li ng-class="{ selected: isActive('/status')}"><a
						ui-sref="status">Effort Status</a></li>
					<li ng-class="{ selected: isActive('/validateEfforts')}"><a
						ui-sref="validateEfforts">Validte Efforts</a></li>
				</ul>
			</div>

		</div>


		<div class="heading-bar">
			<div class="user-bar">
				Hi, Sriram | <a href="#" data-toggle="modal" data-target="#logoutModal">Sign out</a>
			</div>
			<span class="heading-one" ng-bind="title"> <!-- <img ng-src="{{img}}" width="30" height="30"> -->
			</span>

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
						<div class="modal-body">Are you sure you want to log-off ?</div>
						<div class="modal-footer">
							<a href="/BigB/logout" class="btn btn-default">Logout</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="container-fluid container-maverix" ui-view></div>
		</div>
		
		<toaster-container toaster-options="{'time-out': 5000, 'close-button':true}"></toaster-container>
		
	</div>


	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="./lib/jquery/jquery-1.10.js"></script>

<!-- Date.js -->
<script src="lib/date/date.js"></script>

<!-- Scripts to support HTML5 date input -->
<script src="lib/date/better-dom.js"></script>
<script src="lib/date/better-i18n-plugin.js"></script>
<script src="lib/date/better-dateinput-polyfill.js"></script>


<!-- AngularJS, Bootstrap & Application related Scripts -->
<script src="./lib/angular-1.4.3/angular.js"></script>
<script src="./lib/bootstrap/js/bootstrap.min.js"></script>

<script src="./lib/bootstrap/js/moment.js"></script>
<script src="./lib/bootstrap/js/bootstrap-datetime.js"></script>

<script src="./lib/angular-1.4.3/ui-bootstrap-tpls-0.13.3.js"></script>
<script src="./lib/angular-1.4.3/angular-ui-router.js"></script>

<!-- Angular Editable Grid -->
<script src="lib/angular-1.4.3/xeditable.js"></script>
<script src="lib/angular-1.4.3/xeditable.min.js"></script>
<script src="lib/underscore.js"></script>

<script src="lib/angular-1.4.3/angular-animate.min.js"></script>
<script src="lib/angular-1.4.3/toaster.js"></script>


	
<script src="app/js/app.js"></script>
<script src="app/js/services.js"></script>
<script src="app/js/controllers.js"></script>
<script src="app/js/filters.js"></script>
<script src="app/js/directives.js"></script>


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

    });
</script>
</body>
</html>
