package com.app.services;

import java.util.List;

import com.app.model.UserGroup;
import com.app.model.UserModel;

public interface UserGroupService {
	
	public void addUserGroup(UserGroup group);
	public void removeUserGroup(UserGroup group);
	public List<UserGroup> findAll();
	/*public UserGroup getUserById(Integer id);
	public Integer updateUserGroup(UserGroup group);
	
	*/
	

}
