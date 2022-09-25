import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../model/Product';
import { ProductlistService } from '../Services/productlist.service';
import { ViewproductComponent } from '../viewproduct/viewproduct.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //variables
  products:Product[];
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg"),
  //   new Product(1,"Realme",5000,25,"This is just a demo phone if you want it buy it from us","../../assets/appliances.jpg")
  // ];
  subcategory:string|null=this.route.snapshot.paramMap.get('subcategory');
  searchitem:string|null=this.route.snapshot.paramMap.get('searchiteam');
  subscription: Subscription;
  OOfstocks=true;
  //constructor
  constructor(private route:ActivatedRoute,private productlistservice:ProductlistService,private dialog:MatDialog) {
    // console.log(this.subcategory);
   }
   openProductDialog(product:Product){
    localStorage.setItem('product',JSON.stringify(product));
    this.dialog.open(ViewproductComponent ,{
     width:"80%",
     height:"60%"
    })
    
  }

  ngOnInit(): void {
    // console.log(this.subcategory+" "+this.searchitem);
    if(this.searchitem!=null){
    this.search(this.searchitem);
    }
    else if(this.subcategory!=null){
        this.searchbycategory(this.subcategory);
    }
    else{
      this.searchall();
    }
  }
getproductvalue(){
  return 
}
  removeitem(product:Product){
      return product.value--;
  }
  additem(product:Product){
    return product.value++;
}
  //to get the value to check staock and current addon status
  getValue(value:string){
    return Number(value);
  }
  search(searchItem:string){
    let dataitem:any;
    this.productlistservice.serachbyName(searchItem)
    .subscribe(data=>{
      dataitem=data;
      if(dataitem['status']=="OK"){
      console.log(data);
      
      this.products=dataitem['content'];
      }
      // this.initvalue(this.products);
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
      
    },
    error=>console.log("Products not found",error))
  }


  searchbycategory(_searchbysubcat:string){
    let dataitem:any;
    this.productlistservice.searchbycategory(_searchbysubcat)
    .subscribe(data=>{
      dataitem=data;
      if(dataitem['status']=="OK"){
        console.log(data);
        
        this.products=dataitem['content'];
        }
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
      
    },
    error=>console.log("Products not found",error))
  }

searchall(){
  let dataitem:any;
  this.productlistservice.fetchallproducts()
      .subscribe(data=>{
        dataitem=data
         if(dataitem['status']=="OK"){
        console.log(data);
        this.products=dataitem['content'];
        }
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
        
      },
      error=>console.log("Products not found",error))
}
}
