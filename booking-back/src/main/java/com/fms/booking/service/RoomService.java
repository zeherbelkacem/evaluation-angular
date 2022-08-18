package com.fms.booking.service;

import com.fms.booking.entities.Category;
import com.fms.booking.entities.Room;

import java.util.List;

public interface RoomService {

    public Room saveRoom(Room room);
    public List<Category> getAllCategories();
    public List<Room> getAllRooms();

    public List<Room> getRoomsByUser(String username);
}
