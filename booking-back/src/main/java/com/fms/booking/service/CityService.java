package com.fms.booking.service;

import com.fms.booking.entities.City;

import java.util.List;

public interface CityService {

    public City add(City city);

    public City getOneById(long id);

    public void delete(long id);

    public List<City> getAll();

    City findByName(String name);
}
