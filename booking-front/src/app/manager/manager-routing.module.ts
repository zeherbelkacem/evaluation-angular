import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageHotelsComponent } from './components/manage-hotels/manage-hotels.component';
import { ManageNavBarComponent } from './components/manage-nav-bar/manage-nav-bar.component';
import { ManageRoomsComponent } from './components/manage-rooms/manage-rooms.component';
import { SaveRoomComponent } from './components/save-room/save-room.component';

const routes: Routes = [
  {path:'manager', component: ManageNavBarComponent},
    {path:'manageRooms', component: ManageRoomsComponent},
    {path:'manageHotels', component: ManageHotelsComponent},
    {path:'saveRoom', component: SaveRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
