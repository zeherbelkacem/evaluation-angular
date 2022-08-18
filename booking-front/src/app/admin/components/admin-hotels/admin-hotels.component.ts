import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.css']
})
export class AdminHotelsComponent implements OnInit {
  listHotels: Hotel[] |null= null;
  availableRooms: number =0;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteHotel(hotel: Hotel){

  }

  onUpdateHotel(id: number){

  }

}
