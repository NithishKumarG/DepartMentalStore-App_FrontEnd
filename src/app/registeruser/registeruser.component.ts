import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private fb:FormBuilder, private userservice:UserService,private dialog:MatDialog) { }
  registerForm=this.fb.group({
      firstname : [null,[Validators.required,Validators.minLength(3)]],
      lastname : [null,[Validators.required,Validators.minLength(1)]],
      email :     [null,[Validators.required, Validators.email]],
      phone:[null,[Validators.required,Validators.pattern]],
      dob : [null,Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmpassword :[null,Validators.required]
    });  
    hide=true;
    isLoggedIn=LoginComponent.isloggedIn;
  openloginDialog(){
    this.dialog.open(LoginComponent,{
     width:"30%",
    })
    if(LoginComponent.isloggedIn==true){
      this.dialog.closeAll();
    }
}
RegisterUser() {
  if (this.registerForm.invalid) {
    return;
  }
  
  let _user=new User;
  _user.firstName=this.registerForm.get('firstname')?.value!;
  _user.lastName=this.registerForm.get('lastname')?.value!;
  _user.email=this.registerForm.get('email')?.value!;
  _user.phone=Number(this.registerForm.get('phone')?.value!);
  _user.dob=this.registerForm.get('dob')?.value!;
  _user.password=this.registerForm.get('password')?.value!;
  console.log(_user);
  this.userservice.userRegister(_user).subscribe(
    data=>{LoginComponent.isloggedIn=true
    this.dialog.closeAll();},
    error=>LoginComponent.isloggedIn=false)
}
  ngOnInit(): void {
  }
}