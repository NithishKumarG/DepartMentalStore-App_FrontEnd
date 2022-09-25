import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'DepartMentalStore-App_FrontEnd';
  width="width:50px;";
  isMenuOpen=true;
  isloggedIn:string=localStorage.getItem('userloggedIn')!;
  public constructor(private dialog:MatDialog,){
    
  }
  openloginDialog(){
    this.dialog.open(LoginComponent,{
     width:"30%",
    })
    if(this.isloggedIn=="false"||null){
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
  }
}


