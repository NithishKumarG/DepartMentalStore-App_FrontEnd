import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';
import { CommonResponse } from '../model/CommonResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url="http://localhost:8080/cart";
  constructor(private http:HttpClient) {
   
   }
   addToCart(cart:Cart):Observable<CommonResponse>{
      return this.http.post<CommonResponse>(`${this.url}/add`,cart);
  }

  getAllCart(id:number):Observable<CommonResponse[]>
  {
   return this.http.get<object[]>(`${this.url}/get/${id}`);
  }
deletefromcart(cartId:number):Observable<CommonResponse>{
return this.http.delete<CommonResponse>(`${this.url}/remove/${cartId}`);
}

}
