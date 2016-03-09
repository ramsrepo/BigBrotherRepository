package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.EffortTrackerApplicationsModel;
import com.app.services.EffortTrackerService;

@RestController
@RequestMapping("/eft")
public class EffortTrackerController {

	private EffortTrackerService effortTrackService;
	
	@Autowired( required = true )
    @Qualifier( value = "effortTrackService" )
    public void setEffortTrackService(EffortTrackerService effortTrackService){
        this.effortTrackService = effortTrackService;
    }
	
	@RequestMapping( value = "/findAllApps", method = RequestMethod.GET)
	public ResponseEntity<List<EffortTrackerApplicationsModel>> findAllApplications(){
		List<EffortTrackerApplicationsModel> applications = this.effortTrackService.findAllApps();
		//System.out.println(applications);
        if(applications.isEmpty()){
            return new ResponseEntity<List<EffortTrackerApplicationsModel>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<EffortTrackerApplicationsModel>>(applications, HttpStatus.OK);
	}
	
}
