import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-user-hotels',
  templateUrl: './user-hotels.component.html',
  styleUrls: ['./user-hotels.component.css'],
})
export class UserHotelsComponent implements OnInit {
  listHotels: Hotel[] | null = null;
  imageOfHotel!: string[][];
  postResponse: any;

  selectedCityName: string = '';
  constructor(
    private hotelService: HotelService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.hotelService.selectedCityName$.subscribe((value) => {
      this.selectedCityName = value;
      if (this.selectedCityName != '') {
        this.getHotelsByCityName(this.selectedCityName);
      } else this.getAllHotels();
    });
    this.hotelService.setCityName('');
  }

  /**
   *
   */
  getAllHotels() {
    this.hotelService.getAllHotels().subscribe((data) => {
      this.listHotels = data;
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
    });
  }

  getHotelsByCityName(selectedCityName: string) {
    this.hotelService.getHotelByCityName(selectedCityName).subscribe((data) => {
      this.listHotels = data;
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
    });
  }

  onSelectHotel(id: number) {}

  /**
   * 
   * @param i 
   * @returns 
   */
   counter(i: number) {
    return new Array(i);
  }

  showThisHotelsRooms(id: number){

  }

  
}
