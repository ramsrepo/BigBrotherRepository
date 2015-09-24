package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.admin.model.UserDetails;
import com.app.repositories.UserRepository;


@Service("UserService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;
	private List<UserDetails> udList;
	private UserDetails udObj;
	
	//-------------------------------------------------
	// This method fetches all records from Database
	//-------------------------------------------------
	public List<UserDetails> findAllRecords() {
		udList = userRepo.findAll();
		return udList;
	}

	
	
	public UserDetails findUser(Long id) {
		udObj = userRepo.findOne(id);
		return udObj;
	}
	
	
	
	
	
	
	/******************** All Getters & Setters starts from here************************* */

	public void setUserRepo(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	

}
