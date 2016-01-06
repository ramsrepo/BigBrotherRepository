package com.app.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.app.model.UserGroup;

public class UserGroupDaoImpl implements UserGroupDAO{

	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }
	
	@Override
	public void addUserGroup(UserGroup group) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(group);
		
	}

	@Override
	public UserGroup getUserGroupById(Integer id) {
		Session session = this.sessionFactory.getCurrentSession();
		UserGroup group = (UserGroup)session.load(UserGroup.class,new Integer(id));
		return group;
	}

	@Override
	public Integer updateUserGroup(UserGroup group) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeUserGroup(UserGroup group) {
		
		Session session = this.sessionFactory.getCurrentSession();
		UserGroup groupTobeDelete = (UserGroup)session.load(UserGroup.class, group.getId());
        session.delete(groupTobeDelete);
        System.out.println("User Group Object Deleted successfully.....!!");
        
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<UserGroup> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		List<UserGroup> userGroupList = session.createQuery("from UserGroup ORDER BY ID DESC").list();
		return userGroupList;
	}

}
