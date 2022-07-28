package com.sleepaway.dto;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.sleepaway.entity.AppUser;
import com.sleepaway.entity.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@NoArgsConstructor
public class BookingDTO {
    private Long id;
    private String booking_time;
    private LocalDate booking_starting_date;
    private LocalDate booking_final_date;

    @JsonIncludeProperties(value = {"id"})
    private Product product;

    @JsonIncludeProperties(value = {"id"})
    private AppUser appUser;
}
