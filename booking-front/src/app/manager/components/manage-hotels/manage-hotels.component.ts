import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/service/user.service';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-manage-hotels',
  templateUrl: './manage-hotels.component.html',
  styleUrls: ['./manage-hotels.component.css']
})
export class ManageHotelsComponent implements OnInit {
  imageOfHotel!: string[][];
  postResponse: any;
  myHotelsList!: Hotel[];
  constructor(public hotelService: HotelService, private imageService: ImageService, private userService: UserService) { }

  ngOnInit(): void {
    this.onGetMyHotels(this.userService.getConnectedUser())
  }

  onGetMyHotels(userName: string){
    this.hotelService.getMyHotels(userName).subscribe(data=>{
      this.myHotelsList = data;
      let images: string[][] = [];
      for (let i = 0; i < data.length; i++) {
        let imag: string[] = [];
        for (let j = 0; j < data[i].images.length; j++) {
          this.imageService
            .viewImage(data[i].images[j].name)
            .subscribe((res) => {
              this.postResponse = res;
              imag.push('data:image/jpeg;base64,' + this.postResponse.image);
            });
          images[i] = imag;
        }
      }
      this.imageOfHotel = images;
    })
  }

  onSelectHotel(id:any){
    
  }

}
