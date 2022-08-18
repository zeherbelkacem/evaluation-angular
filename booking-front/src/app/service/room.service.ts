import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns 
   */
  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(environment.hostRoom+'/allCategories');
  }

  /**
   * 
   * @returns 
   */
  getAllRooms():Observable<Room[]> {
    return this.http.get<Room[]>(environment.hostRoom+'/all');
  }

  /**
   * 
   * @param room 
   * @returns 
   */
  saveRoom(room: Room):Observable<Room> {
    return this.http.post<Room>(environment.hostRoom+'/save', room);
  }

  getRoomsByUser(username: string):Observable<Room[]> {
    return this.http.get<Room[]>(environment.hostRoom+'/byUser/'+username);
  }
}
