import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-cities-nav-bar',
  templateUrl: './cities-nav-bar.component.html',
  styleUrls: ['./cities-nav-bar.component.css']
})
export class CitiesNavBarComponent implements OnInit {

  listCities: City[] | null = null;
    
  constructor(private cityService: CityService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(data=>{
      this.listCities = data;
    })
  }

  getHotelsByCity(city :string){
    this.hotelService.setCityName(city);
  }

}
