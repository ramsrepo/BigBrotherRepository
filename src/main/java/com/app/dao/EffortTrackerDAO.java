package com.app.dao;

import java.util.List;

import com.app.model.EffortTrackerApplicationsModel;

public interface EffortTrackerDAO {

	public List<EffortTrackerApplicationsModel> findAllApps();
}
