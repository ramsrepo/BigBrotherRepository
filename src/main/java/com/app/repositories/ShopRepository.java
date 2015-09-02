package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.app.admin.model.Shop;
//@RepositoryRestResource( collectionResourceRel = "Shop", path = "shopdetails")
public interface ShopRepository extends JpaRepository<Shop, Integer> {

}
