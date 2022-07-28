package com.sleepaway.dto;

import com.sleepaway.entity.Product;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ImageDTO  {
    private  Long id;
    private  String title;
    private  String url;
    private  Product product;
}
