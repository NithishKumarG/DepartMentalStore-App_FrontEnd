import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'DepartMentalStore-App_FrontEnd';
  width="width:50px;";
  isMenuOpen=true;
  isloggedIn:string=localStorage.getItem('userloggedIn')!;
  public constructor(private dialog:MatDialog,private route:Router){
    
  }
  openloginDialog(){
    this.dialog.open(LoginComponent,{
     width:"30%",
    })
    if(localStorage.getItem('userloggedIn')=="true"){
      this.dialog.closeAll();
    }
  }
  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.width = "width:50px;transition: width 0.7s;";
    } else {
      this.width = "width:200px;transition: width 0.5s;"
    }
  }
  
  isloggedin(){
    if(localStorage.getItem('userloggedIn')=="true")
    return true;
    return false;
  }
  logOut(){

   localStorage.removeItem('userloggedIn');
   localStorage.clear();
   this.route.navigate(['home']);
  }
}


