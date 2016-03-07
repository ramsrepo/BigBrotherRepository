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
<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap Theme css -->
<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap-theme.min.css">

<link rel="stylesheet" type="text/css" href="./lib/bootstrap/css/bootstrap-datetime.css">
<link rel="stylesheet" type="text/css" href="./css/bootstrap-custom.css">
<!-- <link rel="stylesheet" type="text/css" href="./lib/jquery/jquery-ui.css"> -->
<link rel="stylesheet" type="text/css" href="./css/app.css">

<script src="./lib/jquery/jquery-1.10.js"></script>
</head>

<body ng-app="pocApp" ng-controller="homeController"
	style="overflow: hidden">
	<div>
		<div class="navbar navbar-fixed-top navbar-default ">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="/BigB/inme#">e-Tracker</a>
				</div>
				<nav class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right" id="dropMenu">
						<li class="dropdown">
							<a href="#" data-toggle="modal"  
								data-target=".bs-example-modal-sm" title="Logout">
								Log Out
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
					<div id="button">
					  <ul id="menuList">
					    <li>
					    	<a ui-sref="changepassword">
					    		<i class="glyphicon glyphicon-lock"></i>&nbsp;<span>Change Password</span>
					   		</a>
					   	</li>
					    <li>
					    	<a ui-sref="creategroup">
					    		<i class="glyphicon glyphicon-tree-conifer"></i>&nbsp;<span>User Group</span>
					    	</a>
					    </li>
					    <li>
					    	<a ui-sref="createuser">
					    		<i class="glyphicon glyphicon-user"></i>&nbsp;<span>User</span>
					    	</a>
					    </li>
					    <li>
					   	 	<a ui-sref="trackingtemplate">
					   	 		<i class="glyphicon glyphicon-road"></i>&nbsp;<span>Effort Tracker Template</span>
					   	 	</a>
					   	</li>
					    <li>
					    	<a ui-sref="dailyreport">
					    		<i class="glyphicon glyphicon-stats"></i>&nbsp;<span>Reports</span>
					    	</a>
					    </li>
					  </ul>
					</div>
				</div>

				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					<div>
						<div ui-view id="responseContent"></div>
						<div id="popUpDiv"></div>
					</div>

				</div>
			</div>
		</div>
		
		<div class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-sm">
		    <div class="modal-content">
		      <div class="modal-header"><h4>Logout</h4></div>
		      <div class="modal-body">Are you sure you want to log-off ?</div>
		      <div class="modal-footer"><a href="/BigB/logout" class="btn btn-primary btn-block">Logout</a></div>
		    </div>
		  </div>
		</div>

	</div>

	<!-- AngularJS, Bootstrap & Application related Scripts -->
	<script src="./lib/angular-1.4.3/angular.js"></script>
	<script src="./lib/bootstrap/js/bootstrap.min.js"></script>
	<script src="./lib/bootstrap/js/moment.js"></script>
	<script src="./lib/bootstrap/js/bootstrap-datetime.js"></script>
	<script src="./lib/angular-1.4.3/ui-bootstrap-tpls-0.13.3.js"></script>
	<script src="./lib/angular-1.4.3/angular-ui-router.js"></script>



	<script src="./js/app.js"></script>
	<script src="./js/services.js"></script>
	<script src="./js/controllers.js"></script>
	<script src="./js/utilityControllers.js"></script>
	<script src="./js/directives.js"></script>
	<script>
	
	$('#menuList > li').click(function(e) {
	    $('#menuList > li').removeClass('selected');
	    $(this).addClass('selected');
	});
	
	</script>
	
</body>

</html>

<!-- class="ui-state-disabled" To disable any UI element-->