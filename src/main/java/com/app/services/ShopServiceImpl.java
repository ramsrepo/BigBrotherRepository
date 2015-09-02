package com.app.services;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.admin.model.Shop;
import com.app.repositories.ShopRepository;

@Service
public class ShopServiceImpl implements ShopService {

	@Resource
	private ShopRepository shopRepository;

	@Override
	@Transactional
	public Shop create(Shop shop) {
		Shop createdShop = shop;
		return shopRepository.save(createdShop);
	}

	@Override
	@Transactional
	public Shop findById(int id) {
		return shopRepository.findOne(id);
	}

	@Override
	@Transactional
	public Shop delete(int id) {
		Shop deletedShop = shopRepository.findOne(id);

		shopRepository.delete(deletedShop);
		return deletedShop;
	}

	@Override
	@Transactional
	public List findAll() {
		return shopRepository.findAll();
	}

	@Override
	@Transactional
	public Shop update(Shop shop) {
		Shop updatedShop = shopRepository.findOne(shop.getId());

		updatedShop.setName(shop.getName());
		updatedShop.setEmplNumber(shop.getEmplNumber());
		return updatedShop;
	}

}
