package com.fms.booking.service;

import com.fms.booking.entities.Hotel;
import com.fms.booking.entities.Room;

import java.util.List;

public interface HotelService {
    public List<Hotel> getAllHotels();

    public List<Hotel> findByCityNameContains(String cityName);

    public Hotel saveHotel(Hotel hotel);

    public List<Hotel> findByUserUserName(String userName);

    List<Room> getAllHotelRooms(long id);
}
