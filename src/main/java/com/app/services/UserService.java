package com.app.services;

import com.app.model.User;



public interface UserService {

	void save(User user);
	
	User findById(int id);
	
	User findBySso(String sso);
	
}