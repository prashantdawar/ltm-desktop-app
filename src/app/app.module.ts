import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsFormComponent } from './modal_components/customer-details/customer-details-form/customer-details-form.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';



// import { CommonModule } from '@angular/common';
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
    BootstrapBreadcrumbComponent,
    BootstrapFormTextareaComponent,
    BootstrapFormSelectComponent,
    CustomerDetailsViewComponent,
    BootstrapDetailviewComponent,
    CustomerDetailsCreateComponent,
    CustomerDetailsUpdateComponent
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