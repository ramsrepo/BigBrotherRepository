package com.app.services;

import java.util.List;

import com.app.model.UserModel;

public interface UserService {
	
	public void addUser(UserModel user);
	public List<UserModel> findAll();
	/*public UserModel getUserById(Integer id);
	public Integer updateUser(UserModel user);
	public Integer removeUser(Integer id);
	*/
	

}
