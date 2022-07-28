package com.sleepaway.service;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.sleepaway.entity.Category;
import com.sleepaway.dto.CategoryDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.repository.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional

public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Autowired
    private ObjectMapper mapper;

    public CategoryDTO save(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        Category savedCategory = repository.save(category);
        return mapper.convertValue(savedCategory, CategoryDTO.class);
    }

    public void deleteById(Long id) {
        repository.findById(id).orElseThrow();
        repository.deleteById(id);
    }

    public CategoryDTO findById(Long id) {
        Category category = repository.findById(id).orElseThrow();
        return mapper.convertValue(category, CategoryDTO.class);
    }

    public List<CategoryDTO> findAll(Pageable page) {
        Page<Category> categoryPage = repository.findAll(page);
        return categoryPage.stream().map(category -> mapper.convertValue(category, CategoryDTO.class))
                .collect(Collectors.toList());
    }

    public CategoryDTO updateCategory(CategoryDTO categoryDto, Long id) throws JsonMappingException {
        Category category = repository.findById(id).orElseThrow();
        Category categoryUpdate = mapper.updateValue(category, categoryDto);
        repository.saveAndFlush(categoryUpdate);
        return mapper.convertValue(categoryUpdate, CategoryDTO.class);
    }
}