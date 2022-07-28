package com.sleepaway.repository;

import com.sleepaway.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.*;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query
    List<Booking> findAllByProduct_id(Long id);

    @Query
    List<Booking> findAllByAppUser_id(Long id);

    @Query("select b from Booking b " +
            "where b.product.id = ?1 and b.booking_starting_date >= ?2 and b.booking_final_date <= ?3")
    List<Booking> findIfProductIsBooked(Long id, LocalDate booking_starting_date, LocalDate booking_final_date);

}