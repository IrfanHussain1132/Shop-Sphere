package com.klu.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.entity.User;

public interface UserRepo extends JpaRepository<User, String> {
	public List<User> findByRole(int role);
}
