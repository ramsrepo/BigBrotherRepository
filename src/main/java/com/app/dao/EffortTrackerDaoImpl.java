package com.app.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;

@Repository
public class EffortTrackerDaoImpl implements EffortTrackerDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<EffortTrackerApplicationsModel> findAllApps() {
		Session session = this.sessionFactory.getCurrentSession();
		List<EffortTrackerApplicationsModel> appList = session.createQuery("from EffortTrackerApplicationsModel ORDER BY APPLICATION_NAME").list();
		return appList;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<EffortTrackerTemplateModel> findAllEfforts() {
		Session session = this.sessionFactory.getCurrentSession();
		List<EffortTrackerTemplateModel> effortList = session.createQuery("from EffortTrackerTemplateModel ORDER BY ACTIVITY_DATE").list();
		return effortList;
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
			//session.close();
			return saveValidate;
		}
	}
	
	@SuppressWarnings("finally")
	@Override
	public Boolean updateTemplateList(List<EffortTrackerTemplateModel> effortsList) {
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
				session.update(etamObj); 
				
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
			//session.close();
			return saveValidate;
		}
	}
	
}
