import { Product } from "./Product";
import { User } from "./User";

export class Cart
{
    id:number;
    quantity:number;
    cost:number;
    user:User;
    product:Product;
}