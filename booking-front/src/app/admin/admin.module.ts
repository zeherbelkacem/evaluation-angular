import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { AppModule } from '../app.module';
import { CitiesComponent } from './components/cities/cities.component';
import { UsersComponent } from './components/users/users.component';
import { SupervisorsComponent } from './components/supervisors/supervisors.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { SaveCityComponent } from './components/save-city/save-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHotelsComponent } from './components/admin-hotels/admin-hotels.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';



@NgModule({
  declarations: [
    NavAdminComponent,
    CitiesComponent,
    UsersComponent,
    SupervisorsComponent,
    BookingsComponent,
    SaveCityComponent,
    AdminHotelsComponent,
    SaveHotelComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
})
export class AdminModule { }
