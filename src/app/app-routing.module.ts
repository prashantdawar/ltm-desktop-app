import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CouponDetailsFormComponent } from './modal_components/coupon-details/coupon-details-form/coupon-details-form.component';
import { CouponDetailsIndexComponent } from './modal_components/coupon-details/coupon-details-index/coupon-details-index.component';
import { CustomerDetailsCreateComponent } from './modal_components/customer-details/customer-details-create/customer-details-create.component';
import { CustomerDetailsIndexComponent } from './modal_components/customer-details/customer-details-index/customer-details-index.component';



import { CustomerDetailsUpdateComponent } from './modal_components/customer-details/customer-details-update/customer-details-update.component';
import { CustomerDetailsViewComponent } from './modal_components/customer-details/customer-details-view/customer-details-view.component';
import { OrderDetailsCreateComponent } from './modal_components/order-details/order-details-create/order-details-create.component';

import { OrderDetailsIndexComponent } from './modal_components/order-details/order-details-index/order-details-index.component';
import { OrderDetailsUpdateComponent } from './modal_components/order-details/order-details-update/order-details-update.component';


import { OrderDetailsViewComponent } from './modal_components/order-details/order-details-view/order-details-view.component';
import { ProductCategoryDetailsCreateComponent } from './modal_components/product-category-details/product-category-details-create/product-category-details-create.component';
import { ProductCategoryDetailsIndexComponent } from './modal_components/product-category-details/product-category-details-index/product-category-details-index.component';
import { ProductCategoryDetailsUpdateComponent } from './modal_components/product-category-details/product-category-details-update/product-category-details-update.component';

import { ProductCategoryDetailsViewComponent } from './modal_components/product-category-details/product-category-details-view/product-category-details-view.component';
import { ProductDetailsFormComponent } from './modal_components/product-details/product-details-form/product-details-form.component';
import { ProductDetailsIndexComponent } from './modal_components/product-details/product-details-index/product-details-index.component';
import { ProfileDetailsCreateComponent } from './modal_components/profile-details/profile-details-create/profile-details-create.component';
import { ProfileDetailsIndexComponent } from './modal_components/profile-details/profile-details-index/profile-details-index.component';
import { ProfileDetailsUpdateComponent } from './modal_components/profile-details/profile-details-update/profile-details-update.component';
import { ProfileDetailsViewComponent } from './modal_components/profile-details/profile-details-view/profile-details-view.component';


const routes: Routes = [
  { path: '', component: AppComponent },

  { path: 'order-details', component: OrderDetailsIndexComponent },
  { path: 'order-details/create', component: OrderDetailsCreateComponent },
  { path: 'order-details/update/:orderId', component: OrderDetailsUpdateComponent },
  { path: 'order-details/view/:orderId', component: OrderDetailsViewComponent },

  { path: 'customer-details', component: CustomerDetailsIndexComponent },
  { path: 'customer-details/create', component: CustomerDetailsCreateComponent },
  { path: 'customer-details/view/:customerId', component: CustomerDetailsViewComponent },
  { path: 'customer-details/update/:customerId', component: CustomerDetailsUpdateComponent },

  { path: 'product-details', component: ProductDetailsIndexComponent },
  { path: 'product-details/create', component: ProductDetailsFormComponent },



  { path: 'product-category-details', component: ProductCategoryDetailsIndexComponent },
  { path: 'product-category-details/create', component: ProductCategoryDetailsCreateComponent },
  { path: 'product-category-details/update/:productCategoryId', component: ProductCategoryDetailsUpdateComponent },
  { path: 'product-category-details/view/:productCategoryId', component: ProductCategoryDetailsViewComponent },

  { path: 'coupon-details', component: CouponDetailsIndexComponent },
  { path: 'coupon-details/create', component: CouponDetailsFormComponent },

  { path: 'profile-details', component: ProfileDetailsIndexComponent },
  { path: 'profile-details/create', component: ProfileDetailsCreateComponent },
  { path: 'profile-details/update/:profileId', component: ProfileDetailsUpdateComponent },
  { path: 'profile-details/view/:profileId', component: ProfileDetailsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }