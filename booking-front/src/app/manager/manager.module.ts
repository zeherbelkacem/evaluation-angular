import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { AppModule } from '../app.module';
import { ManageHotelsComponent } from './components/manage-hotels/manage-hotels.component';
import { ManageNavBarComponent } from './components/manage-nav-bar/manage-nav-bar.component';
import { ManageRoomsComponent } from './components/manage-rooms/manage-rooms.component';
import { SaveRoomComponent } from './components/save-room/save-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManageNavBarComponent,
    ManageHotelsComponent,
    ManageRoomsComponent,
    SaveRoomComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule, AppModule, FormsModule, ReactiveFormsModule],
})
export class ManagerModule {}
