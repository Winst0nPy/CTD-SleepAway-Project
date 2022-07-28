package com.sleepaway.controller;

import com.sleepaway.dto.FeatureDTO;
import com.sleepaway.entity.Feature;
import com.sleepaway.service.FeatureService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feature")
@Slf4j
@CrossOrigin("*")
@Api(tags = "Feature")
public class FeatureController {
    @Autowired
    private FeatureService featureService;

    @PostMapping
    @ApiOperation(value = "Create feature", response = FeatureDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong, bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code=200,message="The feature was created successfully")})
    public ResponseEntity<FeatureDTO> save(@RequestBody FeatureDTO featureDTO) {
        FeatureDTO featureDTOSave = featureService.saveFeature(featureDTO);
        return ResponseEntity.ok(featureDTOSave);
    }

    @GetMapping
    public List<Feature> findAll() {
        return featureService.findAll();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "Find Feature by id", response = FeatureDTO.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200,message = "Feature found"),
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The Feature doesn't exist")})
    public Feature findByFeatureId(@PathVariable("id") Long id) {
        return featureService.findById(id);
    }

}
