package com.sleepaway.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class ReviewDTO implements Serializable {
    private final Long id;
    private final String comment;
}
