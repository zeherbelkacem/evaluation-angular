import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.css']
})
export class AdminHotelsComponent implements OnInit {
  listHotels: Hotel[] |null= null;
  availableRooms!: any[] ;
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe(hotels=>{
      this.listHotels=hotels;
      let arr: any[]= []
      for(let i=0; i<hotels.length; i++){
        arr.push(JSON.parse(JSON.stringify((hotels[i])))['rooms'].length)
      }
      this.availableRooms=arr 
    })
  }

  onDeleteHotel(hotel: Hotel){

  }

  onUpdateHotel(id: number){

  }

}
