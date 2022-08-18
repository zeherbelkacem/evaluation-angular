package com.fms.booking.service;

import com.fms.booking.entities.Hotel;
import com.fms.booking.entities.Room;
import com.fms.booking.repository.HotelRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelServiceImpl implements HotelService{

    private HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public List<Hotel> findByCityNameContains(String cityName) {
        return hotelRepository.findByCityNameContains(cityName);
    }

    @Override
    public Hotel saveHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public List<Hotel> findByUserUserName(String userName) {
        return hotelRepository.findByUserUserName(userName);
    }

    @Override
    public List<Room> getAllHotelRooms(long id) {
        Hotel hotel = hotelRepository.findById(id).get();
        List<Room> rooms = new ArrayList<>();
        rooms.addAll(hotel.getRooms());
        return rooms;
    }
}
