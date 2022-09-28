import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../model/Cart';
import { Product } from '../model/Product';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  

  constructor(private cartservice:CartService, private toastr:ToastrService) { }
product:Product=JSON.parse(localStorage.getItem('product')!);

  ngOnInit(): void {
  }
  removeitem(product:Product){
    return product.value--;
}
additem(product:Product){
  return product.value++;
}
    additemtocart(product:Product){
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
            timeOut:500
          })
        }
      )
      }
  }
    
