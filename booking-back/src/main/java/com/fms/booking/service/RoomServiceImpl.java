package com.fms.booking.service;

import com.fms.booking.entities.Category;
import com.fms.booking.entities.Room;
import com.fms.booking.repository.CategoryRepository;
import com.fms.booking.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomServiceImpl implements RoomService{
    private RoomRepository roomRepository;
    private CategoryRepository categoryRepository;

    public RoomServiceImpl(RoomRepository roomRepository, CategoryRepository categoryRepository) {
        this.roomRepository = roomRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public List<Room> getRoomsByUser(String username) {
        List<Room> rooms= new ArrayList<>();
        roomRepository.findAll().forEach(r->{
            if (r.getHotel().getUser().getUserName().equalsIgnoreCase(username))
                rooms.add(r);
        });
        return rooms;
    }
}
