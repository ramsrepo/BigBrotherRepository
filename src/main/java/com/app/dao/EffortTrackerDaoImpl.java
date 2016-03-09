package com.app.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.app.model.EffortTrackerApplicationsModel;

public class EffortTrackerDaoImpl implements EffortTrackerDAO{

private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }
	
	@SuppressWarnings("unchecked")
	@Override
	public List<EffortTrackerApplicationsModel> findAllApps() {
		Session session = this.sessionFactory.getCurrentSession();
		List<EffortTrackerApplicationsModel> appList = session.createQuery("from EffortTrackerApplicationsModel ORDER BY APPLICATION_NAME").list();
		return appList;
	}
	
}
