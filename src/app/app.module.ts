import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsFormComponent } from './modal_components/customer-details/customer-details-form/customer-details-form.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';



import { FormsModule } from '@angular/forms';
import { CustomerDetailsIndexComponent } from './modal_components/customer-details/customer-details-index/customer-details-index.component';
import { ProductDetailsFormComponent } from './modal_components/product-details/product-details-form/product-details-form.component';

import { ProductDetailsIndexComponent } from './modal_components/product-details/product-details-index/product-details-index.component';
import { CouponDetailsFormComponent } from './modal_components/coupon-details/coupon-details-form/coupon-details-form.component';


import { CouponDetailsIndexComponent } from './modal_components/coupon-details/coupon-details-index/coupon-details-index.component';
import { BootstrapFormInputComponent } from './widgets/bootstrap/bootstrap-form-input/bootstrap-form-input.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { BootstrapBreadcrumbComponent } from './widgets/bootstrap/bootstrap-breadcrumb/bootstrap-breadcrumb.component';

import { BootstrapFormTextareaComponent } from './widgets/bootstrap/bootstrap-form-textarea/bootstrap-form-textarea.component';
import { BootstrapFormSelectComponent } from './widgets/bootstrap/bootstrap-form-select/bootstrap-form-select.component';
import { CustomerDetailsViewComponent } from './modal_components/customer-details/customer-details-view/customer-details-view.component';
import { BootstrapDetailviewComponent } from './widgets/bootstrap/bootstrap-detailview/bootstrap-detailview.component';
import { CustomerDetailsCreateComponent } from './modal_components/customer-details/customer-details-create/customer-details-create.component';
import { CustomerDetailsUpdateComponent } from './modal_components/customer-details/customer-details-update/customer-details-update.component';
import { ProductCategoryDetailsFormComponent } from './modal_components/product-category-details/product-category-details-form/product-category-details-form.component';
import { ProductCategoryDetailsCreateComponent } from './modal_components/product-category-details/product-category-details-create/product-category-details-create.component';

import { ProductCategoryDetailsUpdateComponent } from './modal_components/product-category-details/product-category-details-update/product-category-details-update.component';
import { ProductCategoryDetailsIndexComponent } from './modal_components/product-category-details/product-category-details-index/product-category-details-index.component';
import { ProductCategoryDetailsViewComponent } from './modal_components/product-category-details/product-category-details-view/product-category-details-view.component';
import { OrderDetailsFormComponent } from './modal_components/order-details/order-details-form/order-details-form.component';
import { OrderDetailsCreateComponent } from './modal_components/order-details/order-details-create/order-details-create.component';

import { OrderDetailsUpdateComponent } from './modal_components/order-details/order-details-update/order-details-update.component';
import { OrderDetailsViewComponent } from './modal_components/order-details/order-details-view/order-details-view.component';
import { OrderDetailsIndexComponent } from './modal_components/order-details/order-details-index/order-details-index.component';
import { ProfileDetailsFormComponent } from './modal_components/profile-details/profile-details-form/profile-details-form.component';
import { ProfileDetailsIndexComponent } from './modal_components/profile-details/profile-details-index/profile-details-index.component';
import { ProfileDetailsViewComponent } from './modal_components/profile-details/profile-details-view/profile-details-view.component';
import { ProfileDetailsCreateComponent } from './modal_components/profile-details/profile-details-create/profile-details-create.component';
import { ProfileDetailsUpdateComponent } from './modal_components/profile-details/profile-details-update/profile-details-update.component';

const dbConfig: DBConfig = {
  name: 'web-db',
  version: 3,
  objectStoresMeta: [{
    store: 'customer_details',
    storeConfig: { keyPath: 'customer_id', autoIncrement: true },
    storeSchema: [
      {
        name: 'customer_name',
        keypath: 'customer_name',
        options: { unique: false }
      }
    ]
  },
  {
    store: 'product_details',
    storeConfig: { keyPath: 'product_id', autoIncrement: true },
    storeSchema: [{
      name: 'product_name',
      keypath: 'product_name',
      options: { unique: true }
    }]
  },
  {
    store: 'product_category_details',
    storeConfig: { keyPath: 'product_category_id', autoIncrement: true },


    storeSchema: [{
      name: 'product_category_name',

      keypath: 'product_category_name',
      options: { unique: true }
    }]
  },
  {  
    store: 'coupon_details',
    
    storeConfig: { keyPath: 'coupon_details_id', autoIncrement: true },
    storeSchema: [{
      name: 'coupon_details_name',
      keypath: 'coupon_details_name',
    

      options: { unique: true }
    }]
  },
  {
    store: 'order_details',
    storeConfig: { keyPath: 'order_id', autoIncrement: true },
    storeSchema: [
      {
        name: 'customer_name',
        keypath: 'customer_name',
        options: { unique: false }
      }
    ]
  },
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    
   
   
    CustomerDetailsFormComponent,
    CustomerDetailsIndexComponent,
    ProductDetailsFormComponent,
    ProductDetailsIndexComponent,
    CouponDetailsFormComponent,
    CouponDetailsIndexComponent,
    BootstrapFormInputComponent,
   
   
    BootstrapBreadcrumbComponent,
    BootstrapFormTextareaComponent,
    BootstrapFormSelectComponent,
    CustomerDetailsViewComponent,
   
    BootstrapDetailviewComponent,
    CustomerDetailsCreateComponent,
    CustomerDetailsUpdateComponent,
    ProductCategoryDetailsFormComponent,
    ProductCategoryDetailsCreateComponent,
    ProductCategoryDetailsUpdateComponent,
    ProductCategoryDetailsIndexComponent,
    ProductCategoryDetailsViewComponent,
    
    OrderDetailsFormComponent,
    OrderDetailsCreateComponent,
    OrderDetailsUpdateComponent,
    OrderDetailsViewComponent,
    OrderDetailsIndexComponent,
    ProfileDetailsFormComponent,
    ProfileDetailsIndexComponent,
    ProfileDetailsViewComponent,
    ProfileDetailsCreateComponent,
    ProfileDetailsUpdateComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoadingBarRouterModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }