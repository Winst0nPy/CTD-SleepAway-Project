package com.sleepaway.controller;

import com.sleepaway.dto.ProductDTO;
import com.sleepaway.dto.ProductResponseDTO;
import com.sleepaway.entity.Product;
import com.sleepaway.service.ProductService;
import com.sleepaway.service.ReviewService;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
@Slf4j
@Api(tags = "Product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping()
    @RolesAllowed("ROLE_ADMIN")
    @ApiOperation(value = "Create product", response = ProductDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong, bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 200, message = "The product was created successfully")})
    public ResponseEntity<Product> save(@ApiParam("Product") @RequestBody @Valid ProductDTO productDTO) {
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "Find Product by id", response = ProductDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The product doesn't exist"),
            @ApiResponse(code = 200, message = "Product found")})
    public ResponseEntity<ProductResponseDTO> findById(@PathVariable("id") Long id) throws NoSuchElementException {
        ProductResponseDTO product = productService.findById(id);
        if (product != null)
            return ResponseEntity.ok(product);
        throw new NoSuchElementException("No existe producto con id : " + id);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete Product by id", response = ProductDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The product doesn't exist")})
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        productService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping()
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error")})
    public ResponseEntity<List<ProductResponseDTO>> findAll() {
        List<ProductResponseDTO> productList = productService.findAll();
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/category/{category_title}")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error") })
    public ResponseEntity<List<ProductResponseDTO>> findByCategory(@PathVariable("category_title") String category_title) {
        List<ProductResponseDTO> productList = productService.findAllByCategoryTitle(category_title);
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/category/id/{category_id}")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error") })
    public ResponseEntity<List<ProductResponseDTO>> findByCategory(@PathVariable("category_id") Long category_id) {
        List<ProductResponseDTO> productList = productService.findAllByCategoryId(category_id);
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/location/{city}")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error") })
    public ResponseEntity<List<ProductResponseDTO>> findAllByCity(@PathVariable("city") String city) {
        List<ProductResponseDTO> productList = productService.findAllByCity(city);
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/location/id/{location_id}")
    public ResponseEntity<List<Product>> findAllByLocationId(@PathVariable("location_id") Long location_id) {
        List<Product> productList = productService.findAllByLocationId(location_id);
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/random")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error")})
    public ResponseEntity<List<Product>> findRandom() {
        List<Product> productList = productService.listOfRandomProducts();
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/location")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Internal server error") })
    public ResponseEntity<List<ProductResponseDTO>> findProductsNotBookedInCity(@RequestParam(value="city_id") Long city_id,
                                                                        @RequestParam(value="start_date") String start_date,
                                                                        @RequestParam(value="end_date") String end_date) {
        List<ProductResponseDTO> productsNotBookedInCity = productService.findProductsNotBookedInCity(
                city_id,
                start_date,
                end_date);

        return ResponseEntity.ok(productsNotBookedInCity);
    }

    @PutMapping("/update")
    public ResponseEntity<ProductDTO> updateProduct(ProductDTO productDTO) {
        return ResponseEntity.ok(productService.updateProduct(productDTO));
    }

    @GetMapping("/count/{category_id}")
    public Long countProductByCategoryId(Long category_id){
        return productService.countProductByCategory(category_id);
    }

    @GetMapping("/count")
    public List<Object> getAllProductForEachCategoryId() {
        return productService.countAllProductByCategory();
    }
}


