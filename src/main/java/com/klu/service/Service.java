package com.klu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.klu.Cryptography;
import com.klu.entity.Product;
import com.klu.entity.User;
import com.klu.repo.ProductRepo;
import com.klu.repo.UserRepo;

@org.springframework.stereotype.Service
public class Service {
	
	@Autowired
	UserRepo repo1;
	
	@Autowired
	ProductRepo repo2;
	
	public String insertUser(User user) {
		repo1.save(user);
		return "Inserted Successfully";
	}

	public User retrieveUser(User user) {
		try {
			User user2 = repo1.findById(user.getUsername()).get();
			//System.out.println(user2);
			if(new com.klu.util.Cryptography().decryptData(user2.getPassword()).equals(user.getPassword())) {
				return user2;
			}
			else {
				return user;
			}
		}
		catch(Exception e) {
			return user;
		}
	}
	
	public String insertProduct(Product product) {
		repo2.save(product);
		return "Inserted Product";
	}

	public List<Product> retrieveProduct() {
		return repo2.findAll();
	}

	public String updateProduct(Product product) {
		Product p2 = repo2.findById(product.getPid()).get();
		if(p2 != null) {
			repo2.delete(p2);
		}
		repo2.save(product);
		return "Updated";
	}

	public String deleteProduct(int pid) {
		repo2.deleteById(pid);
		return "Deleted";
	}

}
