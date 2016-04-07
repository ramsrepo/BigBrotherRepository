package com.app.services;

import java.util.List;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;


public interface EffortTrackerService {

	public List<EffortTrackerApplicationsModel> findAllApps();
	public Boolean saveTemplate(List<EffortTrackerTemplateModel> effortsList);
	public Boolean updateTemplate(List<EffortTrackerTemplateModel> effortsList);
	public List<EffortTrackerTemplateModel> findAllEfforts();
}
