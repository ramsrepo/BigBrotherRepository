package com.app.controllers;

import java.util.Locale;
import java.util.ResourceBundle;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/inme")
public class HomeController {
	
	@RequestMapping(method = RequestMethod.POST, params = {"uname", "pwd"})
    public String goToLogin(@RequestParam(value = "uname") String user, @RequestParam(value = "pwd") String pwd) {
        
		ResourceBundle bundle = ResourceBundle.getBundle("application_zh", Locale.CHINESE );
		//System.out.println(bundle.getString("SAMPLE_KEY"));
		
		return "home";
    }
	
	
}
