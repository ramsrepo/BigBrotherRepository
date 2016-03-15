package com.app.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table( name = "ETT_TEMPLATE")
public class EffortTrackerTemplateModel {

	private Long id;
	private String appCode;
	private String activity;
	private Timestamp activityDate;
	private Long week;
	private Long spentHours;
	private String userCode;
	private String comments;
	
	@Id
	@SequenceGenerator( name="EffortTrackTemplate_Seq", sequenceName = "EFFORTTEMPLATESEQUENCE", allocationSize = 1)
	@GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "EffortTrackTemplate_Seq")	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column( name="APP_CODE")
	public String getAppCode() {
		return appCode;
	}
	
	public void setAppCode(String appCode) {
		this.appCode = appCode;
	}
	
	@Column( name="ACTIVITY")
	public String getActivity() {
		return activity;
	}
	
	public void setActivity(String activity) {
		this.activity = activity;
	}
	
	@Column( name="ACTIVITY_DATE")
	public Timestamp getActivityDate() {
		return activityDate;
	}
	
	public void setActivityDate(Timestamp activityDate) {
		this.activityDate = activityDate;
	}
	
	@Column( name="WEEK")
	public Long getWeek() {
		return week;
	}
	
	public void setWeek(Long week) {
		this.week = week;
	}
	
	@Column( name="SPENT_HOURS")
	public Long getSpentHours() {
		return spentHours;
	}
	
	public void setSpentHours(Long spentHours) {
		this.spentHours = spentHours;
	}
	
	@Column( name="USER_CODE")
	public String getUserCode() {
		return userCode;
	}
	
	public void setUserCode(String userCode) {
		this.userCode = userCode;
	}
	
	@Column( name="COMMENTS")
	public String getComments() {
		return comments;
	}
	
	public void setComments(String comments) {
		this.comments = comments;
	}
	
	
	
}
