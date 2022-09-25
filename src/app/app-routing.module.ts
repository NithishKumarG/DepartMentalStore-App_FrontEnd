import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { UserguardGuard } from './guard/userguard.guard';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewOrdersHistoryComponent } from './view-orders-history/view-orders-history.component';

const routes: Routes = [
{path:'', redirectTo:"/home", pathMatch:'full'},
{path:'home', component:HomeComponent },
{path:'products',component:ProductListComponent},
{path:'products/:searchiteam', component:ProductListComponent},
{path:'products/:category/:subcategory', component:ProductListComponent},
{path:'orderhistory', component:ViewOrdersHistoryComponent,canActivate:[UserguardGuard]
},
{path:'cart', component:CartDetailsComponent,canActivate:[UserguardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
