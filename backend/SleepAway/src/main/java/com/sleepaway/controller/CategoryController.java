package com.sleepaway.controller;

import com.sleepaway.dto.CategoryDTO;
import com.sleepaway.dto.ProductDTO;
import com.sleepaway.service.CategoryService;
import com.fasterxml.jackson.databind.JsonMappingException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@Slf4j
@CrossOrigin("*")
@Api(tags = "Category")
public class CategoryController {

    @Autowired
    private  CategoryService categoryService;

    @PostMapping
    @ApiOperation(value = "Adds a new Category to the DB")
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 422, message = "Invalid ")})
    public ResponseEntity<CategoryDTO> save (@RequestBody  CategoryDTO categoryDto) {
       CategoryDTO categoryDTOSave=categoryService.save(categoryDto);
        return ResponseEntity.ok(categoryDTOSave);
    }

    @GetMapping(value = "/{id}")
    @ApiOperation(value = "Find category",notes = "Find the Category by ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200,message = "Category found"),
            @ApiResponse(code = 404,message = "Category not found"),
    })
    public ResponseEntity<CategoryDTO> findById(@PathVariable("id") Long id) {
        CategoryDTO category = categoryService.findById(id);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete Category by id", response = CategoryDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong,bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The category doesn't exist")})
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        categoryService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody  CategoryDTO categoryDto, @PathVariable("id") Long id) throws JsonMappingException {
        categoryService.updateCategory(categoryDto, id);
        return ResponseEntity.ok().build();
    }

    @GetMapping()
    public ResponseEntity<List<CategoryDTO>> findAll(Pageable page) {
        List<CategoryDTO> categoryList = categoryService.findAll(page);
        return ResponseEntity.ok(categoryList);
    }
}