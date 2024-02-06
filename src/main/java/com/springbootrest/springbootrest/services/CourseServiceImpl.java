package com.springbootrest.springbootrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.springbootrest.springbootrest.model.Courses;

@Service
public class CourseServiceImpl  implements  CourseService  {
	List<Courses> list ;

	public CourseServiceImpl() {
		list = new ArrayList<>();
		list.add(new Courses(143,"Spring","Cover the spring core , spring mvc  topics "));
		list.add(new Courses(145,"Sprin Boot ","Cover the spring , rest controller , rest Api  topics "));
		list.add(new Courses(146,"React ","Cover the js , virtual dom, hooks , axiostopics "));
	}

	@Override
	public List<Courses> getCourses() {
		return list;
	}

	@Override
	public Courses getCourses(Long courseId) {
		Courses foundCourse = null;
		for (Courses course : list) {
			if (course.getId() == courseId) {
				foundCourse = course;
				break;
			}
		}
		return foundCourse;
	}

	@Override
	public Courses addCourses(Courses course) {
		list.add(course);
		return course;
	}

	@Override
	public Courses updateCourses(Courses course) {
		list.forEach(e -> {
			if(e.getId() == course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		return course;
	}

	@Override
	public void deleteCourses(long courseId) {   
	    for (Courses course : list) {
	        if (course.getId() == courseId) {
	  
	            list.remove(course);
	            return ; 
	        } 
	    }
	    throw new NoSuchElementException("Course not found with ID: " + courseId);
	    
	}
	}
