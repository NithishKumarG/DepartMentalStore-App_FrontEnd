import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../model/Cart';
import { Order } from '../model/Order';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-proceedtopayment',
  templateUrl: './proceedtopayment.component.html',
  styleUrls: ['./proceedtopayment.component.css']
})
export class ProceedtopaymentComponent implements OnInit {

  constructor(private toastr:ToastrService,private orderService:OrdersService, private router:Router, private matDialog:MatDialog) { }
address:string;
  ngOnInit(): void {
  }

placeorder(){
  let _order=new Order();
let cart:Cart= JSON.parse(localStorage.getItem('currentbuy')!);
 _order.id=cart.id;
  _order.product=cart.product;
   _order.totalCost=cart.cost;
   _order.quantity=cart.quantity;
  _order.address=this.address;
  _order.paymentmode="cash on deivery";
  _order.orderDate=new Date();
  _order.deliveryDate=new Date();
  _order.deliveryDate.setDate(_order.orderDate.getDate()+3);
  this.orderService.createneworder(_order).subscribe(
    data=>{
          this.toastr.success("Item Orderd Sucessfully","Order",{timeOut:1000});
          this.matDialog.closeAll();
          this.router.navigate(['/cart']);
        
            window.location.reload();
          
          // this.cartitems.forEach((cartitem)=>{
          //   if(cartitem.id===cart.id)
          //   this.cartitems.splice(this.cartitems.indexOf(cartitem),1);
          // })
    },
    error=>{
      this.toastr.error("Order Failed! Please Try Again!","Order",{timeOut:1000})
    }
  )
 }
}

