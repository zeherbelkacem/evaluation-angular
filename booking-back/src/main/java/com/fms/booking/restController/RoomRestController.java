package com.fms.booking.restController;

import com.fms.booking.entities.Category;
import com.fms.booking.entities.City;
import com.fms.booking.entities.Room;
import com.fms.booking.service.CityServiceImpl;
import com.fms.booking.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/room")
public class RoomRestController {

    @Autowired
    private RoomService roomService;

    /**
     * Add a new room
     *
     * @param room
     */
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Room add(@RequestBody Room room) {
      return  roomService.saveRoom(room);
    }


    /**
     * Return list of all rooms
     * @return
     */
    @GetMapping("/all")
    public List<Room> getAll() {
        return roomService.getAllRooms();
    }

    /**
     * Return list of all rooms
     * @return
     */
    @GetMapping("/byUser/{username}")
    public List<Room> getByUser(@PathVariable String username) {
        return roomService.getRoomsByUser(username);
    }

    /**
     *
     * @return
     */
    @GetMapping("/allCategories")
    public List<Category> getAllCategories() {
        return roomService.getAllCategories();
    }
}
