import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitiesNavBarComponent } from './components/cities-nav-bar/cities-nav-bar.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';
import { ManagerRoutingModule } from './manager/manager-routing.module';
import { CommonModule } from '@angular/common';
import { ManagerModule } from './manager/manager.module';
import { AuthModule } from './auth/auth.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowRoomsComponent } from './components/show-rooms/show-rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CitiesNavBarComponent,
    UserHotelsComponent,
    ShowRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    ManagerRoutingModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    NgbCarouselModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports:[NavBarComponent], //components to be used in others module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
