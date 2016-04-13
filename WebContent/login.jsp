<%@ page isELIgnored="false"%>
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
<link rel="stylesheet" type="text/css"
	href="lib/bootstrap/css/bootstrap.min.css">

<style>
body {
	width: 100px;
	height: 100px;
	background-color: #f9f9f9;
	font-family: 'Raleway', sans-serif;
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

.alert {
	display: inline-block;
}

label {
	display: inline-block;
	max-width: 100%;
	margin-bottom: 5px;
	font-weight: normal !important;
}

.loginBody {
	-moz-border-bottom-colors: none;
	-moz-border-left-colors: none;
	-moz-border-right-colors: none;
	-moz-border-top-colors: none;
	background-color: #fff;
	border: 1px solid #d8dee2;
	border-image-outset: 0 0 0 0;
	border-image-repeat: stretch stretch;
	border-image-slice: 100% 100% 100% 100%;
	border-image-source: none;
	border-image-width: 1 1 1 1;
	font-size: 14px;
	padding: 20px;
	border-radius: 4px;
	width: 315px;
}

.btn-primary {
	background-color: #60b044;
	background-image: linear-gradient(#8add6d, #60b044);
	border-bottom-color: #5ca941;
	border-left-color: #5ca941;
	border-right-color: #5ca941;
	border-top-color: #5ca941;
	color: #fff;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
}

.btn-block {
	display: block;
	text-align: center;
	width: 100%;
}

.input-block {
	display: block;
	width: 100%;
}

.pageBody {
	margin-left: 150px;
	margin-top: 70px;
}
</style>
</head>

<body onload='document.loginForm.username.focus();'>
	<div class="middlePage">
		<div class="pageBody">
			<div>
				<h3>Sign in to e-Tracker</h3>
				<br>
				<%
					String errorString = (String) request.getAttribute("error");
					if (errorString != null && errorString.trim().equals("true")) {
						out.println("<div class='alert alert-danger fade in'>"
								+ "<strong>Invalid!</strong> Username or Password..."
								+ "</div>");
					}

					String logOut = (String) request.getAttribute("logOutMsg");
					if (logOut != null && logOut.trim().equals("true")) {
						out.println("<div class='alert alert-success fade in'>"
								+ "You were logged out. Please enter your credentials to login."
								+ "</div>");
					}
				%>
			</div>
			<c:url var="post_url" value="/login" />
			<form name="loginForm" class="form-horizontal" action="${post_url}"
				method="POST">
				<div class="loginBody">
					<div class="input-group input-sm">
						<label for="username">Username</label> <input type="text"
							class="form-control input-block" id="username" name="username"
							placeholder="User Name" required>
					</div>

					<div class="spacing"></div>

					<div class="input-group input-sm">
						<label for="password">Password</label> <input type="password"
							class="form-control input-block" id="password" name="password"
							placeholder="Password" required>
					</div>

					<input type="hidden" name="${_csrf.parameterName}"
						value="${_csrf.token}" />

					<div class="spacing"></div>

					<div class="input-group input-sm">
						<input type="submit" value="Sign in" tabindex="3"
							class="btn btn-primary">
					</div>

				</div>
			</form>
		</div>
	</div>
</html>