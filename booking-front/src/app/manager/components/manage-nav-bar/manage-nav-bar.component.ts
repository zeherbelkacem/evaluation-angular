import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-manage-nav-bar',
  templateUrl: './manage-nav-bar.component.html',
  styleUrls: ['./manage-nav-bar.component.css']
})
export class ManageNavBarComponent implements OnInit {

  constructor(private router: Router, private hotelService: HotelService) { }

  ngOnInit(): void {
  }

}
