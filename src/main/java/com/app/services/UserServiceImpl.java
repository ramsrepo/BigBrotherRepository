package com.app.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDAO;
import com.app.model.UserModel;

@Service
public class UserServiceImpl implements UserService {

	private UserDAO userDao;

	@Override
	@Transactional
	public void addUser(UserModel user){
		this.userDao.addUser(user);
	}
	
	@Override
	@Transactional
	public List<UserModel> findAll(){
		return this.userDao.findAll();
	}
	
	
	public UserDAO getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	
	
	
}
