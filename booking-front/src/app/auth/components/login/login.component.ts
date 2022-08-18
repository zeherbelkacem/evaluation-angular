import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  errorLogin = null;
  private decodedToken!: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  authenticate(form: FormGroup) {
    this.userService.authenticate(form).subscribe((data) => {
      localStorage.setItem('tokens', JSON.stringify(data));
      localStorage.setItem(
        'accessToken',
        JSON.parse(String(localStorage.getItem('tokens')))['access-token']
      );
      localStorage.setItem(
        'refreshToken',
        JSON.parse(String(localStorage.getItem('tokens')))['refresh-token']
      );
    });

    this.router.navigateByUrl('/home');
  }
}
