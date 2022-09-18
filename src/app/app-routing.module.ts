import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewOrdersHistoryComponent } from './view-orders-history/view-orders-history.component';

const routes: Routes = [
 {path:'', redirectTo:"\home", pathMatch:'full'},
{
  path:'home', component:HomeComponent
},
{
path:'products',component:ProductListComponent
},

{
  path:'products/:category', component:ProductListComponent
},
{
  path:'orderhistory', component:ViewOrdersHistoryComponent
},{
  path:'cart', component:CartDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
