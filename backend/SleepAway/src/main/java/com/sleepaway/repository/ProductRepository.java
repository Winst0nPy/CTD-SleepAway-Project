package com.sleepaway.repository;

import com.sleepaway.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    @Query
    List<Product> findAllByLocation_city(String city);

    @Query
    List<Product> findAllByLocation_country(String country);

    @Query
    List<Product> findAllByCategoryTitle(String category_title);

    @Query
    List<Product> findAllByCategoryId(Long category_id);

    @Query
    List<Product> findAllByLocationId(Long location_id);


    @Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 8", nativeQuery = true)
    List<Product> listOfRandomProducts();

    @Query(value =
                    "SELECT p.* FROM product p " +
                    "left join booking b " +
                    "on p.id=b.product_id " +
                    "where p.location_id = ?1 " +
                    "and (b.booking_starting_date is null or " +
                        "b.booking_starting_date not between cast(?2 as date) and cast(?3 as date)) " +
                    "and (b.booking_final_date is null or " +
                        "b.booking_final_date not between cast(?2 as date) and cast(?3 as date)) " +
                    "group by p.id",
            nativeQuery = true)
    List<Product> findProductsNotBookedInCity(Long locationId,
                                              String bookingStartingDate,
                                              String bookingFinalDate);

    long countByCategory_Id(Long id);


}