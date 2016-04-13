<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="utf-8">
<!-- Always force latest IE rendering engine or request Chrome Frame -->
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>e-Tracker</title>
<link rel="shortcut icon" href="./images/loginPageIcon.png" />

<!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css"
	href="lib/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="././css/login.css">

</head>

<body>
	<div class="middlePage">
		<div class="pageBody">
			<section id="login">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<div style="margin-left:430px;">
								<div class="header-logo">
									<a href="/BigB"> <img src="./images/loginPageIcon.png">
									</a>
								</div>
								<h3>
									<span style="margin-left: 40px; letter-spacing: -1px;">Sign in to E-Tracker</span>
								</h3>
								<%
									String errorString = (String) request.getAttribute("error");
									if (errorString != null && errorString.trim().equals("true")) {
										out.println("<font color='red'><strong>Invalid!</strong> Username or Password...</font>");
									}
				
									String logOut = (String) request.getAttribute("logOutMsg");
									if (logOut != null && logOut.trim().equals("true")) {
										out.println("<font color='green'>You were logged out. Please enter your credentials to login.</font>");
									}
								%>
							</div>
							<div class="form-wrap">
								<c:url var="post_url" value="/login" />
								<form role="form" id="login-form" name="loginForm" action="${post_url}" method="POST">
								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
									<div class="form-group">
										<label for="username">Username</label> 
										<input type="text" name="username" id="username" class="form-control" required>
									</div>
									<div class="form-group">
										<label for="password">Password</label> 
										<input type="password" name="password" id="password" class="form-control" required>
									</div>
									<input type="submit" id="btn-login" class="form-control button" value="Sign in">
								</form>
								<!-- <hr> -->
							</div>
						</div>
						<!-- /.col-xs-12 -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container -->
			</section>

			<footer id="footer">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<p>Copyright © - 2016 - 17</p>
							<p>
								Powered by <strong><a
									href="https://www.myhcl.com" target="_blank">HCL Technologies.</a></strong>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</html>