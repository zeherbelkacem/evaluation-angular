package com.fms.booking.restController;

import com.fms.booking.entities.City;
import com.fms.booking.service.CityServiceImpl;
import com.fms.booking.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotel")
public class HotelRestController {

    @Autowired
    private HotelService hotelService;

    /**
     * Add a new city
     *
     * @param city
     */
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public City add(@RequestBody City city) {

        //return  cityService.add(city);
        return null;
    }

    /**
     * Update a city by id
     *
     * @param id
     * @param city
     */
    @PutMapping("/update/{id}")
    public void update(@PathVariable("id") long id, @RequestBody City city) {
//        City cityToUpdate = cityService.getOneById(id);
//        cityToUpdate.setName(city.getName());
//        cityToUpdate.setDepartment(city.getDepartment());
//        cityService.add(cityToUpdate);
    }

    /**
     * Delete city by id
     *
     * @param id
     */
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id) {

//        cityService.delete(id);
    }

    /**
     * Return a city by id
     *
     * @param id
     * @return
     */
    @GetMapping("/get/{id}")
    public City getOne(@PathVariable("id") long id) {
        return  null;
        //return cityService.getOneById(id);
    }

    /**
     * Return list of all cities
     * @return
     */
    @GetMapping("/all")
    public List<City> getAll() {
        return null;
//        return cityService.getAll();
    }
}
