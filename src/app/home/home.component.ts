import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Productcategory } from '../model/Productcategory';
import { productsubcategory } from '../model/productsubcategory';
import { User } from '../model/User';
import { ProductCategorylistService } from '../Services/product-categorylist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:String;
 
  constructor(private router:Router,private categoryList: ProductCategorylistService) { }
  userName:String;
  getUserName(){
    if(localStorage.getItem('userloggedIn')=="true"){
      this.userName=(JSON.parse(localStorage.getItem('user')!) as User).firstName;
    }
    else{
      this.userName="";
    }
    return this.userName;
  }
  ngOnInit(): void {
   
  }
  
  categories:Productcategory[]=this.categoryList.getcategories();
  searchItem(){
    if(this.search.length==0||this.search.length<=2)
      return;
      this.router.navigate(['/products',this.search]);
  }
byCategory(category:String,subcategory:String){
  this.router.navigate(['/products', category,subcategory]);
}
}
