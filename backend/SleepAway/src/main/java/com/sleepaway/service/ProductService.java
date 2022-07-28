package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.sleepaway.dto.ProductCountDTO;
import com.sleepaway.dto.ProductDTO;
import com.sleepaway.dto.ProductResponseDTO;
import com.sleepaway.entity.Category;
import com.sleepaway.entity.Product;
import com.sleepaway.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ProductService {

     @Autowired
     private ProductRepository productRepository;

     @Autowired
     private FeatureService featureService;

     @Autowired
     private ObjectMapper mapper;

     public ProductResponseDTO findById(Long id) {
         Product product = productRepository.findById(id).orElseThrow();
         return mapper.convertValue(product, ProductResponseDTO.class);
     }

     public void deleteById(Long id) {
         productRepository.deleteById(id);
     }

     public List<ProductResponseDTO> findAll(){
            List<Product> products = productRepository.findAll();
            return products.stream()
                    .map(product -> mapper.convertValue(product, ProductResponseDTO.class))
                    .collect(Collectors.toList());
     }

    public Product createProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        product.setFeatures(featureService.handleFeatures(productDTO.getFeatures()));
        return productRepository.save(product);
    }

    public List<ProductResponseDTO> findAllByCategoryTitle(String category_title){
        List<Product> productList = productRepository.findAllByCategoryTitle(category_title);
        return productList
                .stream()
                .map(product -> mapper.convertValue(product, ProductResponseDTO.class))
                .collect(Collectors.toList());
    }

    public List<ProductResponseDTO> findAllByCategoryId(Long category_id){
        List<Product> productList = productRepository.findAllByCategoryId(category_id);
        return productList
                .stream()
                .map(product -> mapper.convertValue(product, ProductResponseDTO.class))
                .collect(Collectors.toList());
    }

    public List<ProductResponseDTO> findAllByCity(String city){
        List<Product> productList = productRepository.findAllByLocation_city(city);
        return productList
                .stream()
                .map(product -> mapper.convertValue(product, ProductResponseDTO.class))
                .collect(Collectors.toList());
    }

    public List<Product> findAllByLocationId(Long location_id){
        return productRepository.findAllByLocationId(location_id);
    }

    public List<Product> listOfRandomProducts(){
        return productRepository.listOfRandomProducts();
    }

    public List<ProductResponseDTO> findProductsNotBookedInCity(Long locationId, String startDate, String endDate){
        List<Product> results = productRepository.findProductsNotBookedInCity(locationId, startDate, endDate);
        return results
                .stream()
                .map(product -> mapper.convertValue(product, ProductResponseDTO.class))
                .collect(Collectors.toList());
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        Product productUpdate=productRepository.save(product);
        return mapper.convertValue(productUpdate,ProductDTO.class);
    }

    public Long countProductByCategory(Long categoryId){
         return productRepository.countByCategory_Id(categoryId);
    }

    public List<Object> countAllProductByCategory() {
        List<Object> productCounter=new ArrayList<>();
        for (long categoryId = 1; categoryId < 5; categoryId++) {
            productCounter.add(new ProductCountDTO(categoryId, productRepository.countByCategory_Id(categoryId)));
        }
        return productCounter;
    }

}
