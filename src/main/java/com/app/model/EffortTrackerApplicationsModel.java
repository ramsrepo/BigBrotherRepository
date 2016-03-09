package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table ( name = "ETT_TOWER_APPLICATION")
public class EffortTrackerApplicationsModel {

	private Long id;
	private String applicationCode;
	private String applicationName;
	private Integer towerCode;
	
	@Id
	@SequenceGenerator(name = "EffortTrackerModel_Seq", sequenceName = "EffortTrackerSequence", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="EffortTrackerModel_Seq")
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column (name="APPLICATION_CODE")
	public String getApplicationCode() {
		return applicationCode;
	}
	
	public void setApplicationCode(String applicationCode) {
		this.applicationCode = applicationCode;
	}
	
	@Column (name="APPLICATION_NAME")
	public String getApplicationName() {
		return applicationName;
	}
	
	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}
	
	@Column (name="TOWER_CODE")
	public Integer getTowerCode() {
		return towerCode;
	}
	
	public void setTowerCode(Integer towerCode) {
		this.towerCode = towerCode;
	}
}


