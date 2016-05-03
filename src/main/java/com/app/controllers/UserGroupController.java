package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.UserGroup;
import com.app.services.UserGroupService;

@RestController
@RequestMapping("/group")
public class UserGroupController {

	@Autowired
	private UserGroupService userGroupService;
	
	/*@Autowired( required = true )
    @Qualifier( value = "userGroupService" )
    public void setUserGroupService(UserGroupService userGroupService){
        this.userGroupService = userGroupService;
    }*/
	
	
	@RequestMapping( value = "/add", method = RequestMethod.POST)
	public ResponseEntity<List<UserGroup>> addUserGroup(@RequestBody UserGroup group){
		System.out.println("group Data from Screen FN: "+ group.getGroupName());
		this.userGroupService.addUserGroup(group);
		List<UserGroup> groups = this.userGroupService.findAll();
        if(groups.isEmpty()){
            return new ResponseEntity<List<UserGroup>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserGroup>>(groups, HttpStatus.OK);
	}
	
	@RequestMapping( value = "/delete", method = RequestMethod.POST)
	public ResponseEntity<List<UserGroup>> deleteUserGroup(@RequestBody UserGroup group){
		System.out.println("Group Data from Screen ID: "+ group.getId());
		this.userGroupService.removeUserGroup(group);
		List<UserGroup> groups = this.userGroupService.findAll();
        if(groups.isEmpty()){
            return new ResponseEntity<List<UserGroup>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserGroup>>(groups, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/findAll", method = RequestMethod.GET)
    public ResponseEntity<List<UserGroup>> listAllUserGroups() {
        List<UserGroup> groups = this.userGroupService.findAll();
        if(groups.isEmpty()){
            return new ResponseEntity<List<UserGroup>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<UserGroup>>(groups, HttpStatus.OK);
    }
	
}
