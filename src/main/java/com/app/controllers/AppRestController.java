package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.admin.model.UserDetails;
import com.app.services.UserServiceImpl;

@RestController
@RequestMapping("rest/api")
public class AppRestController {

	@Autowired
	private UserServiceImpl usObj;
	private List<UserDetails> udServiceList;
	
	@RequestMapping("/getusers")
    public List<UserDetails> getUserDetails() {
		
		udServiceList = usObj.findAllRecords();
    	
		return udServiceList;
        
    }
	
	@RequestMapping("/user/{id}")
    public UserDetails getUserDetails(@PathVariable("id") Long id) {
		
		return usObj.findUser(id);
        
    }



	public void setUsObj(UserServiceImpl usObj) {
		this.usObj = usObj;
	}
	
	
}
