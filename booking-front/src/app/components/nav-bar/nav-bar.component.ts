import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username:string ="user"
  constructor(public userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
  }

}
