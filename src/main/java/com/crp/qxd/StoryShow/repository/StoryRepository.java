package com.crp.qxd.StoryShow.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crp.qxd.StoryShow.model.Story;


@Repository
public interface StoryRepository extends JpaRepository<Story, Integer>{

	@Query(value= "SELECT *" + 
			" FROM story s" + 
			" WHERE age(now(), s.upload_time) <= '5 minutes';", nativeQuery = true)
	List<Story> getValidStories();
	
}
