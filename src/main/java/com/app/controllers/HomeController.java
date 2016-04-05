package com.app.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(value = { "/inme", "/home" }, method = RequestMethod.GET)
	public String homePage(ModelMap model) {
		User user = (User) SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		String name = user.getUsername(); // get logged in username
		System.out.println("System logged in by :  " + name);
		return "maverickhome.jsp";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logOut(ModelMap model) {
		model.addAttribute("logOutMsg", "true");
		return "login.jsp";
	}

	@RequestMapping(value = "/loginError", method = RequestMethod.GET)
	public String loginError(ModelMap model) {
		model.addAttribute("error", "true");
		return "login.jsp";
	}

}
