package com.springbootrest.springbootrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootrest.springbootrest.model.Users;

public interface UserDao  extends JpaRepository<Users,Long>{
	Users findByUsername(String username);
}
