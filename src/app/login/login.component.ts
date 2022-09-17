import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../model/User';
import { RegisteruserComponent } from '../registeruser/registeruser.component';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private userservice:UserService, private dialog:MatDialog) { }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  hide=true;
 
  static isloggedIn=false;
  message="";
  

  onSubmit(){
    let _user=new User;
    _user.email=this.loginForm.get('email')?.value!;
    _user.password=this.loginForm.get('password')?.value!;
    console.log(_user);
    this.userservice.userlogin(_user).subscribe(
      data=>{
        LoginComponent.isloggedIn=true
        this.dialog.closeAll();}
        ,

      error=>this.message="Invalid username or password");
    
  }
  openregisterDialog(){
    this.dialog.open(RegisteruserComponent,{
     width:"50%"
    })
    if(LoginComponent.isloggedIn==true){
      this.dialog.closeAll();
    }
  }
  ngOnInit(): void {
  }

}
