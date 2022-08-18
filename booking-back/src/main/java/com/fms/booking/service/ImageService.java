package com.fms.booking.service;


import com.fms.booking.entities.Image;

public interface ImageService {

    public Image saveImage(Image image);
    public Image getImageByName(String name);
}
