import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Cart } from '../model/Cart';
import { Product } from '../model/Product';
import { RegisteruserComponent } from '../registeruser/registeruser.component';
import { CartService } from '../Services/cart.service';
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
  subcategory:string|null=this.route.snapshot.paramMap.get('subcategory');
  searchitem:string|null=this.route.snapshot.paramMap.get('searchiteam');
  subscription: Subscription;
  OOfstocks=true;
  //constructor
  constructor(private route:ActivatedRoute,private productlistservice:ProductlistService,private dialog:MatDialog,private cartservice:CartService, private toastr:ToastrService) {
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
      if(dataitem!=null){
      if(dataitem['status']=="OK"){
      console.log(data);
      
      this.products=dataitem['content'];
      }
      // this.initvalue(this.products);
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
    }
    },
    error=>console.log("Products not found",error))
  }


  searchbycategory(_searchbysubcat:string){
    let dataitem:any;
    this.productlistservice.searchbycategory(_searchbysubcat)
    .subscribe(data=>{
      dataitem=data;
      if(dataitem!=null){
      if(dataitem['status']=="OK"){
        console.log(data);
        
        this.products=dataitem['content'];
        }
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
    }
    },
    error=>console.log("Products not found",error))
  }

searchall(){
  let dataitem:any;
  this.productlistservice.fetchallproducts()
      .subscribe(data=>{
        dataitem=data
        if(dataitem!=null){
         if(dataitem['status']=="OK"){
        console.log(data);
        this.products=dataitem['content'];
        }
      if(this.products!=null)
      this.products.forEach((element)=>{
        element.value=1;
      })
        } 
      },
      error=>console.log("Products not found",error))
}

additemtocart(product:Product){
  if(localStorage.getItem('userloggedIn')!="true"){
    this.dialog.open(LoginComponent,{
      width:"30%"
     })
     if(localStorage.getItem('userloggedIn')=="true"){
       this.dialog.closeAll();
     }
     return;
  }
let cart=new Cart();
cart.product=product;
cart.user=JSON.parse(localStorage.getItem('user')!);
cart.cost=product.cost;
cart.quantity=product.value;
this.cartservice.addToCart(cart).subscribe(
  data=>{
   this.toastr.success("Item added to cart","Cart",{
    timeOut:800
   })
  },
  error=>{
    this.toastr.error("couldn't add try again!","Cart",{
      timeOut:800
    })
  }
)
}

checkemptyproduct(){
if(this.products?.length>0)
return false;
return true;
}
}
