import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CouponDetailsFormComponent } from './coupon-details-form/coupon-details-form.component';
import { CouponDetailsIndexComponent } from './coupon-details-index/coupon-details-index.component';
import { CustomerDetailsFormComponent } from './customer-details-form/customer-details-form.component';
import { CustomerDetailsIndexComponent } from './customer-details-index/customer-details-index.component';
import { ProductDetailsFormComponent } from './product-details-form/product-details-form.component';
import { ProductDetailsIndexComponent } from './product-details-index/product-details-index.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  
  
  { path: 'customer-details', component: CustomerDetailsIndexComponent },
  { path: 'customer-details/create', component: CustomerDetailsFormComponent },

  
  { path: 'product-details', component: ProductDetailsIndexComponent },
  { path: 'product-details/create', component: ProductDetailsFormComponent },


  
  { path: 'coupon-details', component: CouponDetailsIndexComponent },
  { path: 'coupon-details/create', component: CouponDetailsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }