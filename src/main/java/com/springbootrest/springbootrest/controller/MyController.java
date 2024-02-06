package com.springbootrest.springbootrest.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springbootrest.springbootrest.model.Courses;
import com.springbootrest.springbootrest.services.CourseService;

@RestController
public class MyController {
	@Autowired
	private CourseService courseService;

	@GetMapping(value = "/home", produces = MediaType.APPLICATION_JSON_VALUE)
	public MyResponse getString() {
		MyResponse response = new MyResponse();
		response.setMessage("This is a JSON response from rest API");
		return response;
	}

	@GetMapping(value = "/courses", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Courses> getCourse() {
		return courseService.getCourses();
	}

	@GetMapping(value = "/courses/{courseId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Courses  getCourse(@PathVariable String courseId) {
		return courseService.getCourses(Long.parseLong(courseId));
	}

	@PostMapping(value = "/courses", 	consumes = MediaType.APPLICATION_JSON_VALUE)
	public Courses  addCourse(@RequestBody Courses course){
		return courseService.addCourses(course);
	}

	@PutMapping(value = "/courses", 	consumes = MediaType.APPLICATION_JSON_VALUE)
	public Courses  updateCourse(@RequestBody Courses course){
		return courseService.updateCourses(course);
	}

	@DeleteMapping(value = "/courses/{courseId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
	    try {
	        courseService.deleteCourses(Long.parseLong(courseId));
	        return new ResponseEntity<>(HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}


	static class MyResponse {
		private String message;
		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}
	}
}
