import { Cart } from "./Cart";
import { Product } from "./Product";


export class Order{
    id:number;
    totalCost:number;
    quantity:number;
    userId:number;
    product:Product;
    address:string;
    paymentmode:string;
    deliveryDate:Date;
    orderDate:Date;
}