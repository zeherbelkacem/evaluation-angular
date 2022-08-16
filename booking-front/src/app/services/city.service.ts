import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

   /*First solution
  */
   private CityName$ = new BehaviorSubject<string>("");
   selectedCityName$ = this.CityName$.asObservable();
 
   setCityName(CityName: string) {
     this.CityName$.next(CityName);
   }

  constructor(private http: HttpClient) { }

  public postCity(city : City): Observable<City>{
    return this.http.post<City>(environment.hostCity+"/save", city);
  }

  public getAllCities(): Observable<City[]>{
    return this.http.get<City[]>(environment.hostCity+"/all");
  }
}
