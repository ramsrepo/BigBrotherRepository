package com.app.services;

import java.util.List;

import com.app.admin.model.Shop;


public interface ShopService {

	public Shop create(Shop shop);
	public Shop delete(int id);
	public List<Shop> findAll();
	public Shop update(Shop shop);
	public Shop findById(int id);

}
