package com.springbootrest.springbootrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootrest.springbootrest.dao.CourseDao;
import com.springbootrest.springbootrest.model.Courses;

@Service
public class CourseServiceImpl  implements  CourseService  {
	List<Courses> list ;
	@Autowired
	private CourseDao courseDao;
	public CourseServiceImpl() {

	}	

	@Override
	public List<Courses> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Courses getCourses(Long courseId) {
		 return courseDao.findById(courseId).orElse(null);
	}

	@Override
	public Courses addCourses(Courses course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public Courses updateCourses(Long courseId, Courses course) {
	    return courseDao.save(course);
	}

	@Override
	public void deleteCourses(long courseId) {   
		Courses entity = courseDao.findById(courseId).orElse(null);
		courseDao.delete(entity);
	}
}
