package com.fms.booking.service;

import com.fms.booking.entities.Image;
import com.fms.booking.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService{
    @Autowired
    private ImageRepository imageRepository;
    @Override
    public Image saveImage(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Image getImageByName(String name) {
        return imageRepository.findByName(name);
    }
}
