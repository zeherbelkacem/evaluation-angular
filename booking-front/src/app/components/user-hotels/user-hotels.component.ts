import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-user-hotels',
  templateUrl: './user-hotels.component.html',
  styleUrls: ['./user-hotels.component.css']
})
export class UserHotelsComponent implements OnInit {

  listHotels: Hotel[] | null=null;

  selectedCityName: string = '';
  constructor(private hotelService: HotelService) { }

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
  getAllHotels(){
    this.hotelService.getAllHotels().subscribe(data=>{
      this.listHotels =data;
    })
  }

  getHotelsByCityName(selectedCityName : string){
    this.hotelService.getHotelByCityName(selectedCityName).subscribe(data=>{
      this.listHotels = data;
    })
    // this.listTrainings$ = this.trainingService
    //   .getTrainingsByCategoryName(selectedCatName)
    //   .pipe(
    //     map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
    //     startWith({ dataState: DataStateEnum.LOADING }),
    //     catchError((err) =>
    //       of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
    //     )
    //   );

  }

}
