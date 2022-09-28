import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/User';
import { RegisteruserComponent } from '../registeruser/registeruser.component';
import { UserLoginService } from '../Services/userlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private userservice:UserLoginService, private dialog:MatDialog, private toastr:ToastrService) { }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  hide=true;
  
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
          localStorage.setItem('user',JSON.stringify(this.userdetails));
          localStorage.setItem('userId',this.userdetails.id);
          localStorage.setItem('userloggedIn',this.userdetails.isloggedIn);
          console.log(localStorage.getItem('userId'));
        this.dialog.closeAll();
        this.toastr.success("Logged in Successfully","Login",{timeOut:1000})
      },
      error=>{
        this.toastr.error("Invalid username or Password","Login",{timeOut:2000,
      })
      })
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
