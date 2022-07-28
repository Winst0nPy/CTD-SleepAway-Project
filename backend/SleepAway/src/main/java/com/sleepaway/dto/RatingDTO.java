package com.sleepaway.dto;

import com.sleepaway.entity.Product;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RatingDTO {
    private  Long id;
    private  int rating;
    private  Product product;

}
