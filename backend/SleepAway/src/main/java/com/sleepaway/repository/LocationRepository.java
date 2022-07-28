package com.sleepaway.repository;

import com.sleepaway.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    @Query("SELECT l FROM Location l WHERE l.id = ?1")
    Optional<Location> findById(Long id);

    @Query("SELECT l FROM Location l WHERE l.city = ?1")
    Location findByCity(String city);

    @Query("SELECT l FROM Location l WHERE l.country = ?1")
    Location findByCountry(String country);

    @Query("SELECT l FROM Location l WHERE l.province = ?1")
    Location findByProvince(String province);

    @Query("SELECT l FROM Location l WHERE l.street = ?1")
    Location findByStreet(String street);

    @Query("SELECT l FROM Location l WHERE l.number = ?1")
    Location findByNumber(String number);

}