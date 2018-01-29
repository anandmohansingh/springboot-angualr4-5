package com.advanceconceptlearning.www.course;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
//	private List<Topic> courses = new ArrayList<>(Arrays.asList(
//			new Topic("python", "Python Programming","Python description"),
//			new Topic("ml", "Machine Learning","ML description"),
//			new Topic("ai", "Artifitial Intelligence","AI description")
//			));
	
	public List<Course> getAllCourses(){
		List<Course> courses = new ArrayList<>();
		courseRepository.findAll().forEach(courses::add);
		return courses;
	}
	
	public Course getCourse(String id) {
		//return topics.stream().filter(t-> t.getId().equals(id)).findFirst().get();
		return courseRepository.findOne(id);
	}

	public void addCourse(Course course) {
		courseRepository.save(course);
	}

	public void updateCourse(String id, Course course) {
//		for(int i=0; i < topics.size();i++) {
//			Topic t = topics.get(i);
//			if(t.getId().equals(id)) {
//				topics.set(i, topic);
//				return;
//			}
//		}
		courseRepository.save(course);	
	}

	public void deleteCourse(String id) {
		 //topics.removeIf(t->t.getId().equals(id)); 
		courseRepository.delete(id);
	}
	
}
