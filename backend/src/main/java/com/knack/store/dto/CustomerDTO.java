package com.knack.store.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CustomerDTO {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private AddressDTO defaultAddress;

    @Data
    public static class UpdateProfileRequest {
        private String firstName;
        private String lastName;
        private String phone;
        private AddressDTO defaultAddress;
    }
}
