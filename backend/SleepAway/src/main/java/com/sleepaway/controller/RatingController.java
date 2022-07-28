package com.sleepaway.controller;

import com.sleepaway.dto.RatingDTO;
import com.sleepaway.entity.Rating;
import com.sleepaway.service.RatingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/rating")
@Slf4j
@CrossOrigin("*")
@Api(tags = "Rating")
public class RatingController {

    @Autowired
    RatingService ratingService;

    @PostMapping()
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong, bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code=200,message="The rating was created successfully")})
    public ResponseEntity<RatingDTO> save(@RequestBody RatingDTO ratingDTO) {
        RatingDTO rating = ratingService.save(ratingDTO);
        return ResponseEntity.ok(rating);
    }

    @GetMapping("/product/{product_id}")
    @ApiResponses(value = {
            @ApiResponse(code = 200,message = "Rating found"),
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The Rating doesn't exist")})
    public List<Rating> listRatingByProductId(@PathVariable Long product_id) {
        return ratingService.ratingsByProductId(product_id);
    }

}
