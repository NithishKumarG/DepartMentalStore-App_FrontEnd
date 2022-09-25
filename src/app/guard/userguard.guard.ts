import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate()
  {
    const login=localStorage.getItem('userloggedIn');
    if(login=="true")
    return true;
    else{
      this.router.navigate(['/home']);
      return false;
    }
   
  }
  
}
