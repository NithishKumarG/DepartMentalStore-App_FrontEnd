import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonResponse } from '../model/CommonResponse';
import { User } from '../model/User';
import { RegisteruserComponent } from '../registeruser/registeruser.component';
import { UserLoginService } from '../Services/userlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private userservice:UserLoginService, private dialog:MatDialog) { }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  hide=true;
 
  static isloggedIn=false;
  message="";
  userdetails:any;

  onSubmit(){
    let _user=new User;
    _user.email=this.loginForm.get('email')?.value!;
    _user.password=this.loginForm.get('password')?.value!;
    
   
    this.userservice.userlogin(_user).subscribe(
      data=>{
        this.userdetails=data['content']!;
        console.log(this.userdetails.email);
          this.userdetails.isloggedIn=true;
          localStorage.setItem('userId',this.userdetails.id);
          localStorage.setItem('userloggedIn',this.userdetails.isloggedIn);
          console.log(localStorage.getItem('userId'));
        // LoginComponent.isloggedIn=true
        this.dialog.closeAll();
      },
      error=>this.message="Invalid username or password")
  }
  openregisterDialog(){
    this.dialog.open(RegisteruserComponent,{
     width:"50%"
    })
    if(localStorage.getItem('userloggedIn')=="true"){
      this.dialog.closeAll();
    }
  }
  ngOnInit(): void {
  }

}
