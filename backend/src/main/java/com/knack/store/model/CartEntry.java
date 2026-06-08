package com.knack.store.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cart_entries")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "variant_id")
    private ProductVariant variant;

    private int quantity;

    private Double unitPrice;
}
