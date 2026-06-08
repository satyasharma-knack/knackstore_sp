package com.knack.store.controller;

import com.knack.store.model.Category;
import com.knack.store.repository.CategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
@Tag(name = "Categories", description = "Browse product categories (public)")
@SecurityRequirements
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @GetMapping
    @Operation(summary = "List categories", description = "Returns all product categories.")
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }
}
