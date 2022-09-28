import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../model/Cart';
import { Order } from '../model/Order';
import { Product } from '../model/Product';
import { ProceedtopaymentComponent } from '../proceedtopayment/proceedtopayment.component';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
cartitems:Cart[];
 
  constructor(private cartService:CartService,private toastr:ToastrService,private orderService:OrdersService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllcart();
  }
getAllcart(){
  let id=Number(localStorage.getItem('userId'));
  let cart:any;
  this.cartService.getAllCart(id).subscribe(
    data=>{
      cart=data;
      if(cart['status']=="OK"){
        this.cartitems=cart['content'];
        console.log(this.cartitems);
      }
    }
  )
}
deleteItemFromcart(cartid:number){
this.cartService.deletefromcart(cartid)
.subscribe(
  data=>{
    this.cartitems.forEach((cart)=>{
      if(cart.id===cartid)
      this.cartitems.splice(this.cartitems.indexOf(cart),1);
    })
        if(data['status']=="OK"){
      this.toastr.info(" Item removed from cart");
    }
  }
)
}

 openpaymentDialog(cart:Cart){
  localStorage.setItem('currentbuy',JSON.stringify(cart));
  this.dialog.open(ProceedtopaymentComponent,{
   width:"50%",
   height:"40%"
  })
 
}
 
 getcartSize(){
  let size=0;
  size=this.cartitems?.length;
  return size;
 }
}
