import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myUserForm!: FormGroup;
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myUserForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onSaveUser(form: FormGroup){
    let user: User = {
      id: 0,
      userName: form.value.username,
      password: form.value.password,
      active: true,
      roles: []
    }
    
    this.userService.registerUser(user).subscribe(u=>{
      console.log(u);
      
    })
    this.router.navigateByUrl("/login")
  }
}
