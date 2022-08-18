package com.fms.booking.repository;

import com.fms.booking.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    public Image findByName(String name);
}
