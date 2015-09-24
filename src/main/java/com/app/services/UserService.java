package com.app.services;

import java.util.List;

import com.app.admin.model.UserDetails;

public interface UserService {
	
	public List<UserDetails> findAllRecords();

}
