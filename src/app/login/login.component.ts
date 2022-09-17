import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators} from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private userservice:UserService) { }
  loginForm=this.fb.group({
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
  })
  onSubmit(){
    // let _user;
    // _user.email=this.loginForm.get('email')?.value!;
    // _user.password=this.loginForm.get('password')?.value!;
    // this.userservice.userlogin().subscribe();
  }
  ngOnInit(): void {
  }

}
