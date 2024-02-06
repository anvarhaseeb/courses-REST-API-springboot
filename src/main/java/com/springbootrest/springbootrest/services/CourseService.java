package com.springbootrest.springbootrest.services;

import java.util.List;

import com.springbootrest.springbootrest.model.Courses;

public interface CourseService {
	public List<Courses> getCourses();
    public Courses getCourses(Long courseId);
	public Courses addCourses(Courses course);
	public Courses updateCourses(Courses course);
	public void deleteCourses(long courseId);
}
