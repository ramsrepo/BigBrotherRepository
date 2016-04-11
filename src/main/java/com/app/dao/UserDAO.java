package com.app.dao;

import java.util.List;

import com.app.model.UserModel;

public interface UserDAO {
	
	public void addUser(UserModel user);
	public UserModel getUserById(Integer id);
	public Integer updateUser(UserModel user);
	public void removeUser(UserModel user);
	public List<UserModel> findAll();
	public List<UserModel> findByGroupCode(String groupCode);
	

}
