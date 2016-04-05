<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<!-- Always force latest IE rendering engine or request Chrome Frame -->
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>e-Tracker</title>
<link rel="shortcut icon" href="./images/horselogo.jpg" />

<!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css"
	href="./lib/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap Theme css -->
<link rel="stylesheet" type="text/css"
	href="./lib/bootstrap/css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css"
	href="./lib/bootstrap/css/bootstrap-datetime.css">
<link rel="stylesheet" type="text/css" href="./css/bootstrap-custom.css">
<link rel="stylesheet" type="text/css"
	href="lib/angular-1.4.3/xeditable.css">
<!-- <link rel="stylesheet" type="text/css" href="./lib/jquery/jquery-ui.css"> -->
<link rel="stylesheet" type="text/css" href="./css/app.css">
<link rel="stylesheet" type="text/css" href="./css/menubar.css">

<script src="./lib/jquery/jquery-1.10.js"></script>
</head>

<body ng-app="pocApp" ng-controller="homeController">
	<input type="hidden" name="${_csrf.parameterName}"
		value="${_csrf.token}" />
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
				<div>
					<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
						<li style="padding-left: 30px;"><a href="#dashboard"
							data-toggle="tab">Dashboard</a></li>
						<li class="active"><a href="#application" data-toggle="tab">Application</a></li>
						<li class="dropdown pull-right"><a href="#"
							class="dropdown-toggle" data-toggle="dropdown" role="button"
							aria-haspopup="true" aria-expanded="false">System <span
								class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li role="separator" class="divider"></li>
								<li class="dropdown-header">Nav header</li>
								<li><a href="#">Separated link</a></li>
								<li><a href="#">One more separated link</a></li>
								<li style="background-color: #039BE6;"><a href="#"
									data-toggle="modal" data-target=".bs-example-modal-sm">Logout</a>
								</li>
							</ul></li>
					</ul>
				</div>
			</div>
		</nav>

		<div id="my-tab-content" class="tab-content">
			<div class="tab-pane fade in" id="dashboard">
				
			</div>
			<div class="tab-pane fade in active" id="application">
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-3 col-md-2 sidebar">
							<div id="button">
								<ul id="menuList">
									<li><a ui-sref="changepassword"> <img
											src="././images/changepwd.png" /><span>Change
												Password</span>
									</a></li>
									<li><a ui-sref="creategroup"> <img
											src="././images/usergroup.png" /><span>User Group</span>
									</a></li>
									<li><a ui-sref="createuser"> <img
											src="././images/user.png" /><span>User</span>
									</a></li>
									<li><a ui-sref="trackingtemplate"> <img
											src="././images/task.png" /><span>Effort Tracker
												Template</span>
									</a></li>
									<li><a ui-sref="dailyreport"> <img
											src="././images/report.png" /><span>Reports</span>
									</a></li>
								</ul>
							</div>
						</div>

						<div
							class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
							<div ui-view id="responseContent"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal bs-example-modal-sm" tabindex="-1" role="dialog"
			aria-hidden="true">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<h4>Logout</h4>
					</div>
					<div class="modal-body">Are you sure you want to log-off ?</div>
					<div class="modal-footer">
						<a href="/BigB/logout" class="btn btn-primary btn-block">Logout</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Date.js -->
	<script src="lib/date/date.js"></script>

	<!-- Scripts to support HTML5 date input -->
	<script src="lib/date/better-dom.js"></script>
	<script src="lib/date/better-i18n-plugin.js"></script>
	<script src="lib/date/better-dateinput-polyfill.js"></script>


	<!-- AngularJS, Bootstrap & Application related Scripts -->
	<script src="./lib/angular-1.4.3/angular.js"></script>
	<script src="./lib/bootstrap/js/bootstrap.min.js"></script>
	<script src="./lib/bootstrap/js/bootstrap-tab.js"></script>
	<script src="./lib/bootstrap/js/moment.js"></script>
	<script src="./lib/bootstrap/js/bootstrap-datetime.js"></script>
	<script src="./lib/angular-1.4.3/ui-bootstrap-tpls-0.13.3.js"></script>
	<script src="./lib/angular-1.4.3/angular-ui-router.js"></script>

	<!-- Angular Editable Grid -->
	<script src="lib/angular-1.4.3/xeditable.js"></script>
	<script src="lib/angular-1.4.3/xeditable.min.js"></script>
	<script src="lib/underscore.js"></script>

	<script src="./js/app.js"></script>
	<script src="./js/services.js"></script>
	<script src="./js/controllers.js"></script>
	<script src="./js/utilityControllers.js"></script>
	<script src="./js/directives.js"></script>

	<script>
		jQuery(document).ready(function($) {
			$('#tabs').tab();
			
			$('#tabs > li').click(function(e) {
				$('#tabs > li').removeClass('active');
				$(this).addClass('active');
			});
			
			$('#menuList > li').click(function(e) {
				$('#menuList > li').removeClass('selected');
				$(this).addClass('selected');
			});
			
		});
		
	</script>

</body>

</html>

<!-- class="ui-state-disabled" To disable any UI element-->