import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesNavBarComponent } from './components/cities-nav-bar/cities-nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ShowRoomsComponent } from './components/show-rooms/show-rooms.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'hotels', component:UserHotelsComponent},
  {path:'cities', component:CitiesNavBarComponent},
  {path:'showRooms', component:ShowRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
