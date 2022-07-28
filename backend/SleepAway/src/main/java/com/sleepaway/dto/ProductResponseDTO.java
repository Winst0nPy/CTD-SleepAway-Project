package com.sleepaway.dto;

import com.sleepaway.entity.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class ProductResponseDTO {
    private Long id;
    private String name;
    private String description;
    private Double latitude;
    private Double longitude;
    private Set<Feature> features;
    private Category category;
    private Set<Image> images;
    private Location location;
    private Policy policy;
    private List<Rating> ratings;
}