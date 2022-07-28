package com.sleepaway.entity;

import com.sleepaway.dto.ProductDTO;
import com.sleepaway.repository.ProductRepository;
import com.sleepaway.service.ProductService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Pageable;

import java.util.NoSuchElementException;

@SpringBootTest
public class ProductServiceTest {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductService productService;

//    @Test
//    void deleteProduct() {
//        ProductDTO product = new ProductDTO();
//        productService.createProduct(product);
//
//        ProductDTO product2 = new ProductDTO();
//        productService.createProduct(product2);
//
//        productService.deleteById(product2.getId());
//
//        Assertions.assertThrows(NoSuchElementException.class, ()-> { productService.findById(product2.getId());});
//    }



}
