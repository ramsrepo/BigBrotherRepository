package com.app.services;

import java.util.List;

import com.app.model.UserProfile;


public interface UserProfileService {

	List<UserProfile> findAll();
	
	UserProfile findByType(String type);
	
	UserProfile findById(int id);
}
