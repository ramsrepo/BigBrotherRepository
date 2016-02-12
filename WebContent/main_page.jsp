<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="utf-8">
<!-- Always force latest IE rendering engine or request Chrome Frame -->
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>e-Tracker</title>
<link rel="shortcut icon" href="./images/horselogo.jpg" />

<!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.min.css">

<style>
body {
	width: 100px;
	height: 100px;
	/*   background: -webkit-linear-gradient(90deg, #16222A 10%, #3A6073 90%);
  background: -moz-linear-gradient(90deg, #16222A 10%, #3A6073 90%);
  background: -o-linear-gradient(90deg, #16222A 10%, #3A6073 90%);
  background: -webkit-gradient(linear, 0 100%, 0 0, color-stop(0.1, #16222A), color-stop(0.9, #3A6073));
  background: linear-gradient(90deg, #16222A 10%, #3A6073 90%);  */
	background-color: #33bcf2;
	/* W3C */
	font-family: 'Raleway', sans-serif;
}
p {
	color: #CCC;
}
.spacing {
	padding-top: 7px;
	padding-bottom: 7px;
}
.middlePage {
	width: 680px;
	height: 500px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.logo {
	color: #fff;
}
.alert {
  display:inline-block;
}
</style>
</head>

<body onload='document.loginForm.username.focus();'>
	<div class="middlePage">
		<div class="page-header">
		  <h3 class="logo">Please Sign In</h3>
		  <br>
			<%
				String errorString = (String) request.getAttribute("error");
				if (errorString != null && errorString.trim().equals("true")) {
					out.println("<div class='alert alert-danger fade in'>"+
							  	"<strong>Invalid!</strong> Credentails..."+
							  	"</div>");
				}
				
				String logOut = (String) request.getAttribute("logOutMsg");
				if (logOut != null && logOut.trim().equals("true")) {
					out.println("<div class='alert alert-success fade in'>"+
						  		"<strong>Success:</strong> You were logged out."+
						  		"</div>");
				}
			%>
		</div>
		<c:url var="post_url"  value="/login" />
		<form name="loginForm" class="form-horizontal" action="${post_url}" method="POST">
		
			<fieldset class="col-lg-6">
				<div class="input-group input-sm">
					<label class="input-group-addon" for="username"><i
						class="fa fa-user"></i></label> <input type="text" class="form-control"
						id="username" name="username" placeholder="User Name" required>
				</div>
				<div class="spacing"></div>
				<div class="input-group input-sm">
					<label class="input-group-addon" for="password"><i
						class="fa fa-lock"></i></label> <input type="password"
						class="form-control" id="password" name="password"
						placeholder="Password" required>
				</div>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />



			<!-- 	<input id="uname" name="username" type="text" placeholder="User Name"
					class="form-control input-sm">
					 
				<div class="spacing"></div>

				<input id="pwd" name="password" type="password" placeholder="Password"
					class="form-control input-sm"> -->

				<div class="spacing">
					<!-- <a href="#"><small> Forgot Password?</small></a><br /> -->
				</div>
				<div class="input-group input-sm pull-right">
					<button id="singlebutton" name="signButton" type="submit"
					class="btn btn-warning">Submit</button>
				</div>
				
			</fieldset>
		</form>
	</div>


</html>