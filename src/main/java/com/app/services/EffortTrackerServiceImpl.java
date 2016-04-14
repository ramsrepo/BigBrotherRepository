package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EffortTrackerDAO;
import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;

@Component
public class EffortTrackerServiceImpl implements EffortTrackerService{
	
	@Autowired
	private EffortTrackerDAO effortTrackerDao;
	
	@Override
	@Transactional
	public List<EffortTrackerApplicationsModel> findAllApps(){
		return this.effortTrackerDao.findAllApps();
	}
	
	
	@Override
	@Transactional
	public List<EffortTrackerTemplateModel> findAllEfforts(){
		return this.effortTrackerDao.findAllEfforts();
	}
	
	@Override
	@Transactional
	public Boolean saveTemplate(List<EffortTrackerTemplateModel> effortsList) {
		return  this.effortTrackerDao.saveTemplateList(effortsList); 
	}
	
	@Override
	@Transactional
	public Boolean updateTemplate(List<EffortTrackerTemplateModel> effortsList) {
		return  this.effortTrackerDao.updateTemplateList(effortsList); 
	}

	public EffortTrackerDAO getEffortTrackerDao() {
		return effortTrackerDao;
	}

}
