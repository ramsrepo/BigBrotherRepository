package com.app.dao;

import java.util.List;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;

public interface EffortTrackerDAO {

	public List<EffortTrackerApplicationsModel> findAllApps();
	public Boolean saveTemplateList(List<EffortTrackerTemplateModel> effortsList);
}
