package com.knack.store.repository;

import com.knack.store.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerIdOrderByPlacedDateDesc(Long customerId);
    Optional<Order> findByOrderCode(String orderCode);
}
