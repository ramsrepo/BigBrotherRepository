package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table( name = "ETT_USER_GROUP" )
public class UserGroup {

	private Long id;
	private String groupCode;
	private String groupName;
	private String groupLead;
	private String reportingManager;
	private String project;
	private Long groupSize;
	
	
	@Id
	@SequenceGenerator( name="Usergroup_Seq", sequenceName = "USERGROUPSEQUENCE", allocationSize = 1)
	@GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "Usergroup_Seq")
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column ( name ="GROUP_CODE")
	public String getGroupCode() {
		return groupCode;
	}
	
	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}
	
	@Column ( name ="GROUP_NAME")
	public String getGroupName() {
		return groupName;
	}
	
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	
	@Column ( name ="GROUP_LEAD")
	public String getGroupLead() {
		return groupLead;
	}
	
	public void setGroupLead(String groupLead) {
		this.groupLead = groupLead;
	}
	
	@Column ( name ="REPORTING_MANAGER")
	public String getReportingManager() {
		return reportingManager;
	}
	
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	
	@Column ( name ="PROJECT")
	public String getProject() {
		return project;
	}
	
	public void setProject(String project) {
		this.project = project;
	}
	
	@Column ( name ="GROUP_SIZE")
	public Long getGroupSize() {
		return groupSize;
	}
	
	public void setGroupSize(Long groupSize) {
		this.groupSize = groupSize;
	}
	
	
}
