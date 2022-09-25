import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private url="http://localhost:8080/product";
  private suburl="http://localhost:8080/subCategory"

  constructor(private http:HttpClient) { }
  serachbyName(searchitem:string):Observable<CommonResponse[]>{
    var search:String[];
    search=searchitem.split(" ");
    if(search.length==1){
      return this.http.get<object[]>(`${this.url}/${search}`);
    }
    else{
      let searchbycondition=search.join("/");
      console.log(searchbycondition);
      return this.http.get<object[]>(`${this.url}/${searchbycondition}`);
    } 
  }


  searchbycategory(searchcategory:string):Observable<CommonResponse[]>{
    return this.http.get<object[]>(`${this.suburl}/${searchcategory}`);
  }

  fetchallproducts():Observable<object[]>{
    return this.http.get<object[]>(`${this.url}/all`);
  }
}
