import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Hotel } from 'src/app/models/hotel';
import { RoomService } from 'src/app/service/room.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-save-room',
  templateUrl: './save-room.component.html',
  styleUrls: ['./save-room.component.css'],
})
export class SaveRoomComponent implements OnInit {
  roomForm!: FormGroup;
  listCategories!: Category[];
  listHotels!: Hotel[];
  constructor(
    private roomService: RoomService,
    private router: Router,
    private fb: FormBuilder,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.hotelService.getMyHotels('ilyas').subscribe((data) => {
      this.listHotels = data;
    });
    this.roomService.getAllCategories().subscribe((data) => {
      this.listCategories = data;
    });
    this.roomForm = this.fb.group({
      id: [0],
      quantity: [1],
      hotel: [{}, Validators.required],
      available: [true, Validators.required],
      price: [0, Validators.required],
      category: [{}, Validators.required],
    });
  }
  onSaveRoom(form: FormGroup) {
    this.roomService.saveRoom(form.value).subscribe((savedRoom) => {
      console.log(savedRoom);
    });
    this.router.navigate(['/manageRooms']).then(() => {
      window.location.reload();
    });
  }
}
