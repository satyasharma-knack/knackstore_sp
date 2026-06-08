package com.knack.store.controller;

import com.knack.store.dto.CartDTO;
import com.knack.store.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@Tag(name = "Cart", description = "Manage the authenticated customer's shopping cart (requires JWT)")
public class CartController {

    private final CartService cartService;

    @GetMapping
    @Operation(summary = "Get cart", description = "Returns the current customer's cart with all entries.")
    public ResponseEntity<CartDTO> getCart(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(cartService.getCart(user.getUsername()));
    }

    @PostMapping("/entries")
    @Operation(summary = "Add cart entry", description = "Add a product (and optional variant/quantity) to the cart.")
    public ResponseEntity<CartDTO> addEntry(@AuthenticationPrincipal UserDetails user,
                                            @RequestBody CartDTO.AddEntryRequest request) {
        return ResponseEntity.ok(cartService.addEntry(user.getUsername(), request));
    }

    @PutMapping("/entries/{entryId}")
    @Operation(summary = "Update cart entry", description = "Change the quantity of an existing cart entry.")
    public ResponseEntity<CartDTO> updateEntry(@AuthenticationPrincipal UserDetails user,
                                               @PathVariable Long entryId,
                                               @RequestBody CartDTO.UpdateEntryRequest request) {
        return ResponseEntity.ok(cartService.updateEntry(user.getUsername(), entryId, request.getQuantity()));
    }

    @DeleteMapping("/entries/{entryId}")
    @Operation(summary = "Remove cart entry", description = "Remove an entry from the cart by its id.")
    public ResponseEntity<CartDTO> removeEntry(@AuthenticationPrincipal UserDetails user,
                                               @PathVariable Long entryId) {
        return ResponseEntity.ok(cartService.removeEntry(user.getUsername(), entryId));
    }
}
