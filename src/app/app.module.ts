import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductListComponent } from './product-list/product-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ViewOrdersHistoryComponent } from './view-orders-history/view-orders-history.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import {ToastrModule} from 'ngx-toastr';
import {MatRadioModule} from '@angular/material/radio';
import { ProceedtopaymentComponent } from './proceedtopayment/proceedtopayment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisteruserComponent,
    ProductListComponent,
    CartDetailsComponent,
    ViewOrdersHistoryComponent,
    ViewproductComponent,
    ProceedtopaymentComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   ReactiveFormsModule,
   HttpClientModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatMenuModule,
   MatProgressBarModule,
   MatGridListModule,
   ToastrModule.forRoot({
    preventDuplicates:true
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
