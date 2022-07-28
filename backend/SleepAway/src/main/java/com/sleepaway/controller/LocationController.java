package com.sleepaway.controller;

import com.sleepaway.dto.LocationDTO;
import com.sleepaway.service.LocationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("api/location")
@CrossOrigin("*")
@Api(tags = "Location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @PostMapping
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong, bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 200, message= "The location was created successfully")})
    public ResponseEntity<LocationDTO> createLocation(@RequestBody LocationDTO locationDTO) {
        return ResponseEntity.ok(locationService.save(locationDTO));
    }

    @GetMapping("/{id}")
    @ApiResponses(value = {
            @ApiResponse(code = 200,message = "Feature found"),
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The Location doesn't exist")})
    public ResponseEntity<LocationDTO> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(locationService.findById(id));
    }


    @GetMapping()
    public List<LocationDTO> findAllLocation() {
        return locationService.findAll();
    }

}
