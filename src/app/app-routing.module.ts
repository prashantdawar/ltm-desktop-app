import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CouponDetailsFormComponent } from './coupon-details-form/coupon-details-form.component';
import { CouponDetailsIndexComponent } from './coupon-details-index/coupon-details-index.component';
import { CustomerDetailsCreateComponent } from './customer-details-create/customer-details-create.component';
import { CustomerDetailsIndexComponent } from './customer-details-index/customer-details-index.component';



import { CustomerDetailsUpdateComponent } from './customer-details-update/customer-details-update.component';
import { CustomerDetailsViewComponent } from './customer-details-view/customer-details-view.component';
import { ProductDetailsFormComponent } from './product-details-form/product-details-form.component';

import { ProductDetailsIndexComponent } from './product-details-index/product-details-index.component';



const routes: Routes = [
  { path: '', component: AppComponent },



  { path: 'customer-details', component: CustomerDetailsIndexComponent },
  { path: 'customer-details/create', component: CustomerDetailsCreateComponent },
  { path: 'customer-details/view/:customerId', component: CustomerDetailsViewComponent },
  { path: 'customer-details/update/:customerId', component: CustomerDetailsUpdateComponent },

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