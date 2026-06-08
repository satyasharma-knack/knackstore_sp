package com.knack.store.controller;

import com.knack.store.dto.CustomerDTO;
import com.knack.store.service.CustomerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
@Tag(name = "Customers", description = "View and update the authenticated customer's profile (requires JWT)")
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/me")
    @Operation(summary = "Get my profile", description = "Returns the current authenticated customer's profile.")
    public ResponseEntity<CustomerDTO> getProfile(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(customerService.getProfile(user.getUsername()));
    }

    @PutMapping("/me")
    @Operation(summary = "Update my profile", description = "Update the current authenticated customer's profile details.")
    public ResponseEntity<CustomerDTO> updateProfile(@AuthenticationPrincipal UserDetails user,
                                                      @RequestBody CustomerDTO.UpdateProfileRequest request) {
        return ResponseEntity.ok(customerService.updateProfile(user.getUsername(), request));
    }
}
