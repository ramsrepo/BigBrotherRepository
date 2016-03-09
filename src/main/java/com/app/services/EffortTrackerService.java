package com.app.services;

import java.util.List;

import com.app.model.EffortTrackerApplicationsModel;


public interface EffortTrackerService {

	public List<EffortTrackerApplicationsModel> findAllApps();
}
