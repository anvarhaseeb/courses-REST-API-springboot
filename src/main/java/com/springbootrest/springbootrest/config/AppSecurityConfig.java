package com.springbootrest.springbootrest.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@Configuration
@EnableWebSecurity
public class AppSecurityConfig  {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Bean
	public AuthenticationProvider authProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
		/* provider.setPasswordEncoder(new BCryptPasswordEncoder()); */
		return provider;
		
	}
	 @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
	        return builder.getAuthenticationManager();
	    }
	/*
	 * @Override protected void configure(HttpSecurity http) throws Exception {
	 * 
	 * http .csrf().disable() .authorizeRequests().antMatchers("/login").permitAll()
	 * .anyRequest().authenticated() .and() .formLogin()
	 * .loginPage("/login").permitAll() .and() .logout().invalidateHttpSession(true)
	 * .clearAuthentication(true) .logoutRequestMatcher(new
	 * AntPathRequestMatcher("/logout"))
	 * .logoutSuccessUrl("/logout-success").permitAll();
	 * 
	 * }
	 */
}
