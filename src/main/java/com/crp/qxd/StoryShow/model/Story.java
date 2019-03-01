package com.crp.qxd.StoryShow.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Story {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Size(min=1, max=50, message="O tamanho deve ser entre {min} e {max}")
	private String story;
	
	@NotNull
	@Size(min=1, max=10, message="O tamanho deve ser entre {min} e {max}")
	private String imagePath;

}
