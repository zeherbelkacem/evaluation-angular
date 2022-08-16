import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitiesNavBarComponent } from './components/cities-nav-bar/cities-nav-bar.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CitiesNavBarComponent,
    UserHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    // AdminModule,
  //  AuthModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  exports:[NavBarComponent], //components to be used in others module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
