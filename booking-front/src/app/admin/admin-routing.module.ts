import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CitiesComponent } from './components/cities/cities.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { SaveCityComponent } from './components/save-city/save-city.component';
import { SupervisorsComponent } from './components/supervisors/supervisors.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'admin', component: NavAdminComponent},
  {path:'adminCities', component: CitiesComponent},
  {path:'adminSupervisors', component: SupervisorsComponent},
  {path:'adminUsers', component: UsersComponent},
  {path:'adminBookings', component: BookingsComponent},
  {path:'saveCity', component: SaveCityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
