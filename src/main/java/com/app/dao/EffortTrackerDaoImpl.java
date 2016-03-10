package com.app.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;

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
	
	@SuppressWarnings("finally")
	@Override
	public Boolean saveTemplateList(List<EffortTrackerTemplateModel> effortsList) {
		Session session = this.sessionFactory.getCurrentSession();
		/*Transaction tx = null;*/
		int count = 0;
		Boolean saveValidate = false;
		try {
			/*if(session.getTransaction()!=null)
				tx = session.getTransaction();
			else
				tx = session.beginTransaction();*/
			for ( EffortTrackerTemplateModel etamObj: effortsList ) {
				etamObj.setUserCode("GHANS007");
				   session.persist(etamObj); 
				   if ( ++count % 20 == 0 ) {
				      session.flush();
				      session.clear();
				   }
			}
			/*if (!tx.wasCommitted())
			    tx.commit();*/
			saveValidate = true;
		} catch (HibernateException e) {
			/*if (tx != null)
				tx.rollback();*/
			e.printStackTrace();
			saveValidate = false;
		} finally {
			session.close();
			return saveValidate;
		}
	}
	
}
