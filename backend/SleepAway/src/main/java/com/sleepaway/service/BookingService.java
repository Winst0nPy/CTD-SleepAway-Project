package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.BookingDTO;
import com.sleepaway.dto.BookingProductDTO;
import com.sleepaway.dto.ProductDTO;
import com.sleepaway.entity.Booking;
import com.sleepaway.entity.Product;
import com.sleepaway.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ObjectMapper mapper;


    public BookingDTO save(BookingDTO bookingDto) {
        Booking booking = mapper.convertValue(bookingDto, Booking.class);
        Booking bookingSave = bookingRepository.save(booking);
        return mapper.convertValue(bookingSave, BookingDTO.class);
    }

    public BookingDTO findById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow();
        return mapper.convertValue(booking, BookingDTO.class);
    }

    public void deleteById(Long id) {
        bookingRepository.deleteById(id);
    }

    public List<BookingDTO> findAll() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings
                .stream()
                .map(booking -> mapper.convertValue(booking, BookingDTO.class))
                .collect(Collectors.toList());
    }

    public List<BookingDTO> findByProductId(Long id) {
        List<Booking> bookings = bookingRepository.findAllByProduct_id(id);
        return bookings
                .stream()
                .map(booking -> mapper.convertValue(booking, BookingDTO.class))
                .collect(Collectors.toList());
    }
    public List<BookingDTO> findByUserId(Long id) {
        List<Booking> bookings = bookingRepository.findAllByAppUser_id(id);
        return bookings
                .stream()
                .map(booking -> mapper.convertValue(booking, BookingDTO.class))
                .collect(Collectors.toList());
    }

    public Boolean findIfProductIsBooked(LocalDate initialDate, LocalDate finalDate, Long id) {
        List<Booking> booking = bookingRepository.findIfProductIsBooked(id, initialDate, finalDate);
        return !booking.isEmpty();
    }

    public List<BookingProductDTO> findAllProductBookedByUserId(Long id) {
        List<Booking> bookings = bookingRepository.findAllByAppUser_id(id);
        return bookings
                .stream()
                .map(booking -> mapper.convertValue(booking, BookingProductDTO.class))
                .collect(Collectors.toList());
    }






}
