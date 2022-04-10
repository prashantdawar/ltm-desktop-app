import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsFormComponent } from './customer-details-form/customer-details-form.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';



// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsIndexComponent } from './customer-details-index/customer-details-index.component';

import { ProductDetailsFormComponent } from './product-details-form/product-details-form.component';
import { ProductDetailsIndexComponent } from './product-details-index/product-details-index.component';


import { CouponDetailsFormComponent } from './coupon-details-form/coupon-details-form.component';
import { CouponDetailsIndexComponent } from './coupon-details-index/coupon-details-index.component';
import { BootstrapFormInputComponent } from './widgets/bootstrap/bootstrap-form-input/bootstrap-form-input.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { BootstrapBreadcrumbComponent } from './widgets/bootstrap/bootstrap-breadcrumb/bootstrap-breadcrumb.component';

const dbConfig: DBConfig = {
  name: 'web-db',
  version: 2,
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

    store: 'coupon_details',
    storeConfig: { keyPath: 'coupon_details_id', autoIncrement: true },
    storeSchema: [{
      name: 'coupon_details_name',
      keypath: 'coupon_details_name',
      options: { unique: true }
    }]
  }
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
    BootstrapBreadcrumbComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,


    FormsModule,
    LoadingBarRouterModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }