<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>e-Tracker</title>
		<link href=<c:url value="/static/images/loginPageIcon.png"/> rel="shortcut icon" />

		<!-- Bootstrap core CSS -->
		<link href="<c:url value='/static/lib/bootstrap/css/bootstrap.min.css' />"  rel="stylesheet"></link>
		<link rel="stylesheet" type="text/css" href=<c:url value="/static/css/login.css"/> >
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
									<a href="/BigB"> <img src=<c:url value="/static/images/loginPageIcon.png"/> >
									</a>
								</div>
								<h3>
									<span style="margin-left: 40px; letter-spacing: -1px;">Sign in to E-Tracker</span>
								</h3>
							</div>
							<div class="form-wrap">
								<c:url var="loginUrl" value="/login" />
								<form action="${loginUrl}" method="post" role="form" id="login-form" name="loginForm">
									<c:if test="${param.error != null}">
										<div class="alert alert-danger">
											<p>Invalid username and password.</p>
										</div>
									</c:if>
									<c:if test="${param.logout != null}">
										<div class="alert alert-success">
											<p>You have been logged out successfully.</p>
										</div>
									</c:if>
									<div class="form-group">
										<label for="username">Username</label> 
										<input type="text" name="ssoId" id="username" class="form-control" required>
									</div>
									<div class="form-group">
										<label for="password">Password</label> 
										<input type="password" name="password" id="password" class="form-control" required>
									</div>
									<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
										
									<div class="form-actions">
										<input type="submit" class="btn btn-block btn-primary btn-default" value="Log in">
									</div>
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

	</body>
</html>