package com.sleepaway.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductCountDTO {
    private Long id;
    private Long count;

    public ProductCountDTO(long id, long countByCategory_id) {
        this.id = id;
        this.count=countByCategory_id;
    }
}
