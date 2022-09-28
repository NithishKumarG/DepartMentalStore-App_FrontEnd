import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/User';
import { UserLoginService } from '../Services/userlogin.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private fb:FormBuilder, private userservice:UserLoginService,private dialog:MatDialog,private toastr:ToastrService) { }
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
    isLoggedIn=localStorage.getItem('userloggedIn');
    userdetails:any;
    openloginDialog(){
    this.dialog.open(LoginComponent,{
     width:"30%",
    })
    if(localStorage.getItem('userloggedIn')=="true"){
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
    data=>{
      this.userdetails=data['content']!;
      console.log(this.userdetails.email);
        this.userdetails.isloggedIn=true;
        localStorage.setItem('user',JSON.stringify(this.userdetails));
        localStorage.setItem('userId',this.userdetails.id);
        localStorage.setItem('userloggedIn',this.userdetails.isloggedIn);
        console.log(localStorage.getItem('userId'));
      this.dialog.closeAll();
      this.toastr.success("Register Succesfull","Register",{
        timeOut:1000
      })}
      
      ,
    error=>{
      localStorage.setItem('userloggedIn',"false")
         this.toastr.error("Registeration failed Try again!","Register",{
          timeOut:1000
         })}
          )
}
  ngOnInit(): void {
  }
}