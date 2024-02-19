package com.springbootrest.springbootrest.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.springbootrest.springbootrest.security.JWTAuthenticationFilter;
import com.springbootrest.springbootrest.security.JwtAuthenticationEntryPoint;
@Configuration
public class SecurityConfig {

	@Autowired
	private JwtAuthenticationEntryPoint point;

	@Autowired
	private JWTAuthenticationFilter filter;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
		.authorizeHttpRequests(auth -> auth.requestMatchers("/test").authenticated()
				.requestMatchers("/auth/login").permitAll().anyRequest().authenticated())
		.exceptionHandling(ex -> ex.authenticationEntryPoint(point))
		.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.formLogin(form -> form.successHandler(successHandler()));

		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	@Bean
	public AuthenticationSuccessHandler successHandler() {
		SimpleUrlAuthenticationSuccessHandler handler = new SimpleUrlAuthenticationSuccessHandler();
		handler.setDefaultTargetUrl("/File.html");
		return handler;
	}
}