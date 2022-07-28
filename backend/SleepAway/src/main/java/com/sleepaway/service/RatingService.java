package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.RatingDTO;
import com.sleepaway.entity.Rating;
import com.sleepaway.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class RatingService {


    @Autowired
    RatingRepository ratingRepository;


    @Autowired
    ObjectMapper mapper;


    public List<RatingDTO> listRatingByProductId(Long product_id){
        List<Rating> ratings= ratingRepository.findAllByProductId(product_id);
        return ratings.stream().map(rating -> mapper.convertValue(ratings, RatingDTO.class)).collect(Collectors.toList());
    }

    public List<Rating> ratingsByProductId(Long product_id){
        return ratingRepository.findAllByProductId(product_id);
    }

    public Long countRatingByProductId(Long product_id){
        return ratingRepository.countByProductId(product_id);
    }

    public RatingDTO save(RatingDTO ratingDTO) {
        Rating rating = mapper.convertValue(ratingDTO, Rating.class);
        Rating ratingSave = ratingRepository.save(rating);
        return mapper.convertValue(ratingSave, RatingDTO.class);
    }

    public RatingDTO findById(Long id) {
        Rating rating = ratingRepository.findById(id).orElse(null);
        return mapper.convertValue(rating, RatingDTO.class);
    }




}
