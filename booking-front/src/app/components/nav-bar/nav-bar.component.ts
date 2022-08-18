import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/service/user.service';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myForm!: FormGroup
  username:string ="user"
  listHotels!:Hotel[]
  constructor(public userService:UserService, private router: Router, private fb: FormBuilder, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      keyWord:['']
    })
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
  }

  onSearch(myForm: FormGroup){
    this.hotelService.setCityName(myForm.value.keyWord);
    // this.hotelService.getHotelByCityName(myForm.value.keyWord).subscribe(hotels=>{
    //   this.listHotels = hotels;
    //   console.log(hotels);
      
    // })
    
  }

}
