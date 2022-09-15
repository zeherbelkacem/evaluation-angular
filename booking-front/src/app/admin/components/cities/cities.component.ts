import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { SaveCityComponent } from '../save-city/save-city.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  listCities: City[] | null = null;
  constructor(private router: Router, private cityService: CityService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.onGetAllCities();
  }

  /**
   *
   */
  onGetAllCities() {
    this.cityService.getAllCities().subscribe((allCities) => {
      this.listCities = allCities;
    });
  }

  /**
   *
   * @param city
   */
  onDeleteCity(city: City) {}

  onUpdateCity(id: number) {}

  addCityForm() {
    this.dialog.open(SaveCityComponent, {
      width:'50%'
    })
  }
}
