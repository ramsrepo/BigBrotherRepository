package com.app.controllers;

import java.util.List;

import org.hibernate.type.TrueFalseType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.UserModel;
import com.app.services.UserService;

@Component
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	/*@Autowired( required = true )
    @Qualifier( value = "userService" )
    public void setUserService(UserService userService){
        this.userService = userService;
    }*/
	
	
	@RequestMapping( value = "/add", method = RequestMethod.POST)
	public ResponseEntity<List<UserModel>> addUser(@RequestBody UserModel user){
		System.out.println("ApplicationUser Data from Screen FN: "+ user.getName());
		this.userService.addUser(user);
		List<UserModel> users = this.userService.findAll();
        if(users.isEmpty()){
            return new ResponseEntity<List<UserModel>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
	}
	
	@RequestMapping( value = "/delete", method = RequestMethod.POST)
	public ResponseEntity<List<UserModel>> deleteUser(@RequestBody UserModel user){
		System.out.println("ApplicationUser Data from Screen ID: "+ user.getId());
		this.userService.removeUser(user);
		List<UserModel> users = this.userService.findAll();
        if(users.isEmpty()){
            return new ResponseEntity<List<UserModel>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/findAll", method = RequestMethod.GET)
    public ResponseEntity<List<UserModel>> listAllUsers() {
        List<UserModel> users = this.userService.findAll();
        if(users.isEmpty()){
            return new ResponseEntity<List<UserModel>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
    }
	
	@RequestMapping( value = "/findUsersByGroup", method = RequestMethod.POST)
	public ResponseEntity<List<UserModel>> findUsersByGroup(@RequestBody String groupCode) {
        List<UserModel> users = this.userService.findAllByGroupCode(groupCode);
        if(users.isEmpty()){
            return new ResponseEntity<List<UserModel>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
    }
	
	
}
