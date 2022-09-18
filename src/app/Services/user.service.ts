import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url="http://localhost:8080/user";
  isloggedIn=false;
  getIsLoggedIn(){
    return this.isloggedIn;
  }
    public constructor(private http:HttpClient) { }
  userlogin(user:User):Observable<User>{
      return this.http.post<User>(`${this.url}/signIn`, user)
  }

  userRegister(user:User){
    console.log(user);
    return this.http.post(`${this.url}/signUp`,user)  
                     
  }
}
