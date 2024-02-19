package com.springbootrest.springbootrest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springbootrest.springbootrest.config.UserDetailsImpl;
import com.springbootrest.springbootrest.dao.UserDao;
import com.springbootrest.springbootrest.model.Users;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UserDao repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Users user = repo.findByUsername(username);
		if(user == null ) 
				throw new UsernameNotFoundException("User 404");
		return  new UserDetailsImpl(user);
		
	}

}
