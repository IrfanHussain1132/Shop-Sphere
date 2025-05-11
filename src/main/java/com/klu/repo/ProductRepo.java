package com.klu.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {
	
}
