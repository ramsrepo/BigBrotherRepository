package com.app.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDAO;
import com.app.dao.UserGroupDAO;
import com.app.model.UserGroup;
import com.app.model.UserModel;

@Service
public class UserGroupServiceImpl implements UserGroupService {

	private UserGroupDAO userGroupDao;

	@Override
	@Transactional
	public void addUserGroup(UserGroup group){
		this.userGroupDao.addUserGroup(group);
	}
	
	@Override
	@Transactional
	public void removeUserGroup(UserGroup group){
		this.userGroupDao.removeUserGroup(group);
	}
	
	@Override
	@Transactional
	public List<UserGroup> findAll(){
		return this.userGroupDao.findAll();
	}

	public UserGroupDAO getUserGroupDao() {
		return userGroupDao;
	}

	public void setUserGroupDao(UserGroupDAO userGroupDao) {
		this.userGroupDao = userGroupDao;
	}
	
	
	
	
	
	
	
}
