package com.sleepaway.controller;

import com.sleepaway.dto.BookingDTO;
import com.sleepaway.dto.BookingProductDTO;
import com.sleepaway.service.BookingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;

import java.util.*;

@RestController
@Slf4j
@RequestMapping("/api/booking")
@Api(tags = "Booking")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/product/{id}")
    @ApiOperation(value = "Find Booking by product id", response = BookingDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The product doesn't exist")})
    public ResponseEntity<List<BookingDTO>> findByProduct(@PathVariable("id") Long id) {
        List<BookingDTO> bookingList = bookingService.findByProductId(id);
        return ResponseEntity.ok(bookingList);
    }

    @PostMapping()
    @ApiOperation(value = "Create a new booking")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 422, message = "Invalid username/password supplied"),
            @ApiResponse(code = 401, message = "Error"),
            @ApiResponse(code = 201, message = "Booking created")})
    public ResponseEntity<?> createBooking(@RequestBody BookingDTO bookingDTO) {
        if (bookingDTO.getBooking_starting_date().isBefore(LocalDate.now())){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("La fecha de inicio debe ser mayor a la fecha actual");
        }

        if (bookingDTO.getBooking_final_date().isBefore(bookingDTO.getBooking_starting_date())){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("La fecha de finalización debe ser mayor a la fecha de inicio");
        }

        Boolean isBooked = bookingService
                .findIfProductIsBooked(
                        bookingDTO.getBooking_starting_date(),
                        bookingDTO.getBooking_final_date(),
                        bookingDTO.getProduct().getId());

        if (isBooked){
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("El producto ya está reservado en ese periodo");
        }

        BookingDTO booking = bookingService.save(bookingDTO);

        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<BookingProductDTO>> findByUserById(@PathVariable("id") Long id){
        List<BookingProductDTO> bookingList = bookingService.findAllProductBookedByUserId(id);
       return ResponseEntity.ok(bookingList);
    }

}
