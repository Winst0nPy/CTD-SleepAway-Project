package com.sleepaway.repository;

import com.sleepaway.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

    @Query
    List<Rating> findAllByProductId(Long productId);

    @Query
    Long countByProductId(Long productId);

    @Query
    long countById(Long id);

}