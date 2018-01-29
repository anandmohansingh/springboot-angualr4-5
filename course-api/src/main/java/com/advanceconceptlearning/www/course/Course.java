package com.advanceconceptlearning.www.course;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	
	private int id;
	@Id
	private String course_id;
	private String title;
	private String description;
	private String img;
	
	
	public Course() {
		
	}
	
	public Course(int id,String course_id, String title, String description,String img) {
		super();
		this.id = id;
		this.course_id = course_id;
		this.title = title;
		this.description = description;
		this.img = img;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCourse_id() {
		return course_id;
	}

	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
}
