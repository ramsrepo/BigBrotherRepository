package com.app.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EffortTrackerDAO;
import com.app.model.EffortTrackerApplicationsModel;

@Service
public class EffortTrackerServiceImpl implements EffortTrackerService{
	
	private EffortTrackerDAO effortTrackerDao;
	
	@Override
	@Transactional
	public List<EffortTrackerApplicationsModel> findAllApps(){
		return this.effortTrackerDao.findAllApps();
	}

	public EffortTrackerDAO getEffortTrackerDao() {
		return effortTrackerDao;
	}

	public void setEffortTrackerDao(EffortTrackerDAO effortTrackerDao) {
		this.effortTrackerDao = effortTrackerDao;
	}

}
