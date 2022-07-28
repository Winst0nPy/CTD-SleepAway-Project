package com.sleepaway.entity;

import lombok.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String booking_time;

    @Column(name="booking_starting_date", columnDefinition = "DATE")
    private LocalDate booking_starting_date;

    @Column(name="booking_final_date", columnDefinition = "DATE")
    private LocalDate booking_final_date;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser appUser;

}