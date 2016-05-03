package com.app.dao;

import java.util.List;

import com.app.model.UserGroup;

public interface UserGroupDAO {
	
	public void addUserGroup(UserGroup user);
	public UserGroup getUserGroupById(Integer id);
	public Integer updateUserGroup(UserGroup user);
	public void removeUserGroup(UserGroup user);
	public List<UserGroup> findAll();

}
