package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.BookingDTO;
import com.sleepaway.dto.ReviewDTO;
import com.sleepaway.entity.Booking;
import com.sleepaway.entity.Review;
import com.sleepaway.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    ObjectMapper mapper;


    public List<ReviewDTO> getAllByProductId(Long id) {
        List<Review> reviews = reviewRepository.findAllByProduct_Id(id);
        return reviews
                .stream()
                .map(booking -> mapper.convertValue(reviews, ReviewDTO.class))
                .collect(Collectors.toList());
    }

    public ReviewDTO createReview(ReviewDTO reviewDTO){
        Review review=mapper.convertValue(reviewDTO,Review.class);
        Review reviewSaved=reviewRepository.save(review);
        return mapper.convertValue(reviewSaved,ReviewDTO.class);
    }

    public ReviewDTO getAllByProductIdAndUserId(Long product_id,Long user_id) {
        Review reviews = reviewRepository.findByProduct_IdAndAppUser_Id(product_id,user_id);
        return mapper.convertValue(reviews,ReviewDTO.class);
}
}
