package com.app.dao;

import java.util.List;

import com.app.model.UserModel;

public interface UserDAO {
	
	public void addUser(UserModel user);
	public UserModel getUserById(Integer id);
	public Integer updateUser(UserModel user);
	public Integer removeUser(Integer id);
	public List<UserModel> findAll();

}
