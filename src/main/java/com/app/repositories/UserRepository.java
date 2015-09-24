package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.app.admin.model.UserDetails;


@RepositoryRestResource( collectionResourceRel = "userdetails", path = "userdetails")
public interface UserRepository extends JpaRepository<UserDetails,Long> {

	
	public UserDetails findOne(@Param("id") Long Id);
	
	
	
}
