import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 private url="http://localhost:8080/user";
  isloggedIn=localStorage.getItem('userloggedIn');
  
  ;
  getIsLoggedIn(){
    return this.isloggedIn;
  }
    public constructor(private http:HttpClient) { }
  userlogin(user:User):Observable<CommonResponse>{
      return this.http.post<object>(`${this.url}/signIn`, user)
  }

  userRegister(user:User):Observable<CommonResponse>{
    return this.http.post<CommonResponse>(`${this.url}/signUp`,user)  
                     
  }
}
