package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.admin.model.Shop;

import com.app.services.ShopServiceImpl;

@RestController
@RequestMapping("rest/api")
public class AppRestController {

	@Autowired
	private ShopServiceImpl usObj;
	private List<Shop> udServiceList;

	@RequestMapping("/getusers")
	public List<Shop> getUserDetails() {

		udServiceList = usObj.findAll();

		return udServiceList;

	}

}
