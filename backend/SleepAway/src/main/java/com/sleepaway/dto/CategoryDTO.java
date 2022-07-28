package com.sleepaway.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CategoryDTO {
    private Long id;
    private String description;
    private String title;
    private String imageUrl;
}
