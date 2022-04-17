import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CouponDetailsFormComponent } from './modal_components/coupon-details-form/coupon-details-form.component';
import { CouponDetailsIndexComponent } from './modal_components/coupon-details-index/coupon-details-index.component';
import { CustomerDetailsCreateComponent } from './modal_components/customer-details-create/customer-details-create.component';
import { CustomerDetailsIndexComponent } from './modal_components/customer-details-index/customer-details-index.component';



import { CustomerDetailsUpdateComponent } from './modal_components/customer-details-update/customer-details-update.component';
import { CustomerDetailsViewComponent } from './modal_components/customer-details-view/customer-details-view.component';
import { ProductDetailsFormComponent } from './modal_components/product-details-form/product-details-form.component';

import { ProductDetailsIndexComponent } from './modal_components/product-details-index/product-details-index.component';



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