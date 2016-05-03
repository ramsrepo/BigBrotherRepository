package com.app.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.model.EffortTrackerTemplateModel;
import com.app.services.EffortTrackerService;

@RestController
@RequestMapping("/eft")
public class EffortTrackerController {

	@Autowired
	private EffortTrackerService effortTrackService;
	
	@RequestMapping( value = "/findAllApps", method = RequestMethod.GET)
	public ResponseEntity<List<EffortTrackerApplicationsModel>> findAllApplications(){
		List<EffortTrackerApplicationsModel> applications = this.effortTrackService.findAllApps();
        if(applications.isEmpty()){
            return new ResponseEntity<List<EffortTrackerApplicationsModel>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<EffortTrackerApplicationsModel>>(applications, HttpStatus.OK);
	}
	
	@RequestMapping( value = "/findAllEfforts", method = RequestMethod.GET)
	public ResponseEntity<List<EffortTrackerTemplateModel>> findAllEfforts(){
		List<EffortTrackerTemplateModel> efforts = this.effortTrackService.findAllEfforts();
        if(efforts.isEmpty()){
            return new ResponseEntity<List<EffortTrackerTemplateModel>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<EffortTrackerTemplateModel>>(efforts, HttpStatus.OK);
	}
	
	@RequestMapping( value = "/saveEfforts", method = RequestMethod.POST)
	public ResponseEntity<List<EffortTrackerTemplateModel>>  saveEffortTemplate(@RequestBody List<EffortTrackerTemplateModel> effortTemplateList){
		boolean saveValidate = this.effortTrackService.saveTemplate(effortTemplateList);
		List<EffortTrackerTemplateModel> efforts = new ArrayList<EffortTrackerTemplateModel>();
		if(saveValidate)
			efforts = this.effortTrackService.findAllEfforts();
		
		if(efforts.isEmpty())
			return new ResponseEntity<List<EffortTrackerTemplateModel>>(HttpStatus.NO_CONTENT);
	    else {
	    	return new ResponseEntity<List<EffortTrackerTemplateModel>>(efforts, HttpStatus.OK);  
	    }
	}
	
	@RequestMapping( value = "/updateEfforts", method = RequestMethod.POST)
	public ResponseEntity<List<EffortTrackerTemplateModel>> updateEffortTemplate(@RequestBody List<EffortTrackerTemplateModel> effortTemplateList) {
		boolean saveValidate = this.effortTrackService.updateTemplate(effortTemplateList);
		List<EffortTrackerTemplateModel> efforts = new ArrayList<EffortTrackerTemplateModel>();
		if(saveValidate)
			efforts = this.effortTrackService.findAllEfforts();
		
		if(efforts.isEmpty())
			return new ResponseEntity<List<EffortTrackerTemplateModel>>(HttpStatus.NO_CONTENT);
	    else {
	    	return new ResponseEntity<List<EffortTrackerTemplateModel>>(efforts, HttpStatus.OK);  
	    }
		
	}
	
}
