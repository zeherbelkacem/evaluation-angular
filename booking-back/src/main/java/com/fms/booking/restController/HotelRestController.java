package com.fms.booking.restController;

import com.fms.booking.entities.City;
import com.fms.booking.entities.Hotel;
import com.fms.booking.entities.Image;
import com.fms.booking.entities.Room;
import com.fms.booking.service.CityServiceImpl;
import com.fms.booking.service.HotelService;
import com.fms.booking.service.ImageService;
import com.fms.booking.utils.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotel")
public class HotelRestController {

    @Autowired
    private HotelService hotelService;
    @Autowired
    private ImageService imageService;

    @PostMapping(value = {"/save"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Hotel saveTraining(@RequestPart("hotel") Hotel hotel, @RequestPart("imageFile") MultipartFile files[])
            throws IOException {
        System.out.println(hotel);
        List<Image> imgs = new ArrayList<>();
        for (int i=0; i<files.length; i++){
            System.out.println(files[i].getName());
            Image image = imageService.saveImage(Image.builder()
                    .name(files[i].getOriginalFilename())
                    .type(files[i].getContentType())
                    .image(ImageUtility.compressImage(files[i].getBytes())).build());
            imgs.add(image);
        }
        hotel.setImages(imgs);
        return hotelService.saveHotel(hotel);

    }

    /**
     *
     * @return
     */
    @GetMapping("/all")
    public @ResponseBody ResponseEntity<List<Hotel>> getAllHotels() {
        return new ResponseEntity<>(hotelService.getAllHotels(), HttpStatus.OK);
    }

    @GetMapping("/hotelRooms/{id}")
    public @ResponseBody ResponseEntity<List<Room>> getAllHotelRooms(@PathVariable long id) {
        return new ResponseEntity<>(hotelService.getAllHotelRooms(id), HttpStatus.OK);
    }


    /**
     *
     * @param cityName
     * @return
     */
    @GetMapping(value = "/byCity/{cityName}")
    public @ResponseBody ResponseEntity<List<Hotel>> getHotelsByCategoryName(@PathVariable String cityName) {

        return new ResponseEntity<List<Hotel>>(hotelService.findByCityNameContains(cityName), HttpStatus.OK);
    }

    @GetMapping(value = "/byUser/{userName}")
    public @ResponseBody ResponseEntity<List<Hotel>> getHotelsByUser(@PathVariable String userName) {

        return new ResponseEntity<List<Hotel>>(hotelService.findByUserUserName(userName), HttpStatus.OK);
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
    @GetMapping("/alll")
    public List<City> getAll() {
        return null;
//        return cityService.getAll();
    }
}
