package com.sleepaway.repository;

import com.sleepaway.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {

    @Query("Select f FROM Feature f where f.name= ?1 and f.react_icon=?2")
    Feature findByNameAndReactIcon(String name, String react_icon);

    @Query("Select f.name, f.react_icon from Feature f")
    List<Feature> findAllFeaturesNameIcon();
}