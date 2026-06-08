package com.knack.store.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Address {
    private String firstName;
    private String lastName;
    private String line1;
    private String line2;
    private String city;
    private String state;
    private String postcode;
    private String country;
    private String phone;
}
