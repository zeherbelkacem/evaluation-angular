import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  viewImage(image: any):Observable<any> {
    return this.http.get<any>('http://localhost:8086/booking/image/get/image/info/' + image)
  }
}
