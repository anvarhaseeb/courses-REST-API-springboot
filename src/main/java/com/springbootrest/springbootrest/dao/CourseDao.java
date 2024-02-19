package com.springbootrest.springbootrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootrest.springbootrest.model.Courses;

public interface CourseDao extends JpaRepository<Courses, Long> {

}
