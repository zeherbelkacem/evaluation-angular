import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppModule } from '../app.module';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';


@NgModule({
  declarations: [
   
  
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppModule
  ]
})
export class AdminModule { }
