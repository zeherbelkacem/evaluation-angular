import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/service/user.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {

  listRooms!: Room[];
  constructor(private roomService: RoomService, private userService: UserService) { }

  ngOnInit(): void {
    this.roomService.getRoomsByUser(this.userService.getConnectedUser()).subscribe(rooms=>{    
      this.listRooms = rooms;
    })
  }

  onUpdateRoom(id: number){

  }

  onDeleteRoom(room: Room){

  }

  onGetAllRooms(){
    // console.log("ccccccccccccc");
    // this.roomService.getAllRooms().subscribe(rooms=>{    
    //   this.listRooms = rooms;
    // })
  }

}
