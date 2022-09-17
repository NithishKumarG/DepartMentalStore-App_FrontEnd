import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  public constructor(private dialog:MatDialog){
    
  }
  openloginDialog(){
    this.dialog.open(LoginComponent,{
     width:"30%",
    })
  }
  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.width = "width:50px;transition: width 0.7s;";
    } else {
      this.width = "width:200px;transition: width 0.5s;"
    }
  }
}


