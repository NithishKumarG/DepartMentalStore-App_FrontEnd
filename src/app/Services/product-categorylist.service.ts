import { Injectable } from '@angular/core';
import { Productcategory } from '../model/Productcategory';
import { productsubcategory } from '../model/productsubcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategorylistService {
  electronicsubCat:productsubcategory[]=[
    new productsubcategory("Mobiles"),
    new productsubcategory("Laptops"),
    new productsubcategory("TV")
  ];
  grocesriessubCat:productsubcategory[]=[
    new productsubcategory("Grains"),
    new productsubcategory("Flour"),
    new productsubcategory("cooking oil")
  ];
  fashionsubcat:productsubcategory[]=[
    new productsubcategory("Men"),
    new productsubcategory("Women")
  ];
  homeapplieancessubCat:productsubcategory[]=[
    new productsubcategory("Washing Machine"),
    new productsubcategory("Fan"),
    new productsubcategory("AC")
  ];
  beautysubCat:productsubcategory[]=[
    new productsubcategory("Shampoo"),
    new productsubcategory("Soaps"),
    new productsubcategory("Creams")
  ];

  categories:Productcategory []=[
     new Productcategory(1, "Electronics",this.electronicsubCat,"../../assets/electronics.jpeg"),
     new Productcategory(2,"Fashion",this.fashionsubcat,"../../assets/fashion.jpg"),
     new Productcategory(3,"Beauty",this.beautysubCat,"../../assets/amy-shamblen-xwM61TPMlYk-unsplash.jpg"),
     new Productcategory(4,"Home Appliances",this.homeapplieancessubCat,"../../assets/appliances.jpg"),
     new Productcategory(5,"Groceries",this.grocesriessubCat,"../../assets/download.jpg") 
  ]
  getcategories(){
    return this.categories;
  }
  constructor() { }
}
