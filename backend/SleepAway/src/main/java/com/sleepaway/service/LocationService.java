package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.LocationDTO;
import com.sleepaway.entity.Location;
import com.sleepaway.repository.LocationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service

public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private ObjectMapper mapper;

    public LocationDTO save(LocationDTO locationDTO) {
        Location location = mapper.convertValue(locationDTO, Location.class);
        Location savedLocation = locationRepository.save(location);
        return mapper.convertValue(savedLocation, LocationDTO.class);
    }

    public void deleteById(Long id) {
        locationRepository.findById(id).orElseThrow();
        locationRepository.deleteById(id);
    }

    public LocationDTO findById(Long id) {
        Location location = locationRepository.findById(id).orElseThrow();
        return mapper.convertValue(location, LocationDTO.class);
    }
    public List<LocationDTO> findAll() {
        List<Location> locationPage = locationRepository.findAll();
        return locationPage.stream().map(location -> mapper.convertValue(location, LocationDTO.class)).collect(Collectors.toList());
    }

    public LocationDTO getLocationByCity(String city){
        Location location=locationRepository.findByCity(city);
        return mapper.convertValue(location, LocationDTO.class);
    }

    public Location findByCity(String city){
        return locationRepository.findByCity(city);
    }
}
