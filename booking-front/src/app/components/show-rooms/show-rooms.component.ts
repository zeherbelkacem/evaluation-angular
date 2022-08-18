import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  listRooms:Room[] | null=null;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.listRooms = this.roomService.getHotelRooms();
  }

}
