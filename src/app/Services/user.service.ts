import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url="localhost:8080/user/"
    public constructor(private http:HttpClient) { }
  userlogin(user:User):Observable<Object>{
      return this.http.post<Object>(this.url, user);
  }
}
