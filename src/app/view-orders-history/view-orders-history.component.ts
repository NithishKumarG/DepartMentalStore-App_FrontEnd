import { Component, Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from '../model/Order';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-view-orders-history',
  templateUrl: './view-orders-history.component.html',
  styleUrls: ['./view-orders-history.component.css']
})
export class ViewOrdersHistoryComponent implements OnInit {

  constructor(private orderservice:OrdersService ) { }
  orderList:Order[];
  ngOnInit(): void {
    this.getAllOrders();
  }
getAllOrders()
{
  let orderdettails:any;
  let userID=Number(localStorage.getItem('userId'));
  this.orderservice.getAllOrderDetails(userID).subscribe(data=>{
  console.log(data);
  orderdettails=data;
  if(orderdettails['status']=="OK"){
    this.orderList=orderdettails['content'];
  }
},
error=>console.log("No Orders"));
}

isshippingdone(deliveryDate:Date){
  let date=new Date();
  date.setHours(0, 0, 0, 0);
  let deliverydate=new Date(deliveryDate);
  deliverydate.setHours(0, 0, 0, 0);
  date.setDate(date.getDate()+2);
  if(date.getDate()==deliverydate.getDate()||date.getDate()>=deliverydate.getDate())
    return true;
    return false;
}
isoutfordelivery(deliveryDate:Date){
  let date=new Date();
  date.setHours(0, 0, 0, 0);
  let deliverydate=new Date(deliveryDate);
  deliverydate.setHours(0, 0, 0, 0);
  date.setDate(date.getDate()+1);
  if(date.getDate()==deliverydate.getDate()||date.getDate()>=deliverydate.getDate())
    return true;
    return false;
}
isDeliverd(deliveryDate:Date){
  let date=new Date();
  date.setHours(0, 0, 0, 0);
  let deliverydate=new Date(deliveryDate);
  deliverydate.setHours(0, 0, 0, 0);
  if(date.getDate()>=deliverydate.getDate()){
    return true;
   }
  return false;
}


}
