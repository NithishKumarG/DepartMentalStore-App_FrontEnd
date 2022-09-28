import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private url="http://localhost:8080/cart/"
  constructor(private http:HttpClient) { }

  getAllOrderDetails(userId:number):Observable<CommonResponse[]>{
    return this.http.get<object[]>(`${this.url}getOrder/${userId}`);
  }

  createneworder(order:Order):Observable<CommonResponse>{
    return this.http.post<CommonResponse>(`${this.url}/order`,order);
  }
}
