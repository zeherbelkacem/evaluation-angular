import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

   /*First solution
  */
   private CityName$ = new BehaviorSubject<string>("");
   selectedCityName$ = this.CityName$.asObservable();
 
   setCityName(CityName: string) {
     this.CityName$.next(CityName);
   }
  constructor(private http: HttpClient) { }

  getHotelByCityName(city: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(
      environment.hostHotel + '/byCity/' + city
    );
  }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(
      environment.hostHotel + '/all/'
    );
  }
}
