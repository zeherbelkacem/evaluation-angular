package com.fms.booking.repository;

import com.fms.booking.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    public List<Hotel> findByCityNameContains(String cityName);

    List<Hotel> findByUserUserName(String userName);
}
