package com.app.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.app.model.UserModel;

public class UserDaoImpl implements UserDAO{

	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }
	
	@Override
	public void addUser(UserModel user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(user);
		
	}

	@Override
	public UserModel getUserById(Integer id) {
		Session session = this.sessionFactory.getCurrentSession();
		UserModel user = (UserModel)session.load(UserModel.class,new Integer(id));
		return user;
	}

	@Override
	public Integer updateUser(UserModel user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeUser(UserModel user) {
		
		Session session = this.sessionFactory.getCurrentSession();
		UserModel userTobeDelete = (UserModel)session.load(UserModel.class, user.getId());
        session.delete(userTobeDelete);
        System.out.println("Object Deleted successfully.....!!");
        
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<UserModel> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		List<UserModel> userList = session.createQuery("from UserModel ORDER BY ID DESC").list();
		return userList;
	}

}
