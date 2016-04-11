package com.app.services;

import java.util.List;

import com.app.model.UserModel;

public interface UserService {
	
	public void addUser(UserModel user);
	public void removeUser(UserModel user);
	public List<UserModel> findAll();
	public List<UserModel> findAllByGroupCode(String groupCode);
	/*public UserModel getUserById(Integer id);
	public Integer updateUser(UserModel user);
	
	*/
	

}
