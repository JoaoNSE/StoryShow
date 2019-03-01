package com.crp.qxd.StoryShow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crp.qxd.StoryShow.model.Story;


@Repository
public interface StoryRepository extends JpaRepository<Story, Integer>{

}
