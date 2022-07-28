package com.sleepaway.dto;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.sleepaway.entity.*;
import com.sleepaway.entity.Image;
import lombok.*;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Data
public class ProductDTO {
    @NotNull
    private  String name;
    @NotNull
    private  String description;
    @NotNull
    private  Double latitude;
    @NotNull
    private  Double longitude;
    private  Set<Feature> features;
    @NotNull
    @JsonIncludeProperties(value = {"id"})
    private  Category category;
    @NotNull
    private  Set<Image> images;
    @NotNull
    private  Location location;
    @NotNull
    private  Policy policy;
    private List<Rating> ratings;

}
