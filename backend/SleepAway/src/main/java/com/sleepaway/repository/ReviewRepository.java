package com.sleepaway.repository;

import com.sleepaway.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {


    @Query
    List<Review> findAllByProduct_Id(Long id);

    Review findByProduct_IdAndAppUser_Id(Long product_id, Long user_id);












}