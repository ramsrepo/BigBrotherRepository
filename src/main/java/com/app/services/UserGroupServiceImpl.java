package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserGroupDAO;
import com.app.model.UserGroup;

@Service
public class UserGroupServiceImpl implements UserGroupService {

	@Autowired
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
	
}
