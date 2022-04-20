import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DetailView } from 'src/app/modals_core/DetailView';
import { ProductCategoryDetails } from 'src/app/modals_data/product_category_details';





@Component({
  selector: 'app-product-category-details-view',
  templateUrl: './product-category-details-view.component.html',

  styleUrls: ['./product-category-details-view.component.css']
})


export class ProductCategoryDetailsViewComponent implements OnInit {
  breadcrumbItems: any[] = [];
  modelProductCategoryDetails: ProductCategoryDetails = new ProductCategoryDetails();
  columns: (string | DetailView)[] = [];

  
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }

  
  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.modelProductCategoryDetails.getClassLabel(),
      'urlTo': '/product-category-details',

      'active': true
    },
    {
      'label': this.modelProductCategoryDetails.getClassLabel(),
      'active': true
    }
    ];

    const routeParams = this.route.snapshot.paramMap;
    const productCategoryId = Number(routeParams.get('productCategoryId'));


    this.getFromIndexDB(productCategoryId);
  }

  getFromIndexDB(productCategoryId: number){
    this.modelProductCategoryDetails
    .findOne(this.dbService, productCategoryId)
    .subscribe((productCateogry) => {
      console.log(productCateogry);
      this.modelProductCategoryDetails = Object.assign(new ProductCategoryDetails(), productCateogry);
      this.updateColumns();
      // console.log(this.modelProductCategoryDetails.attributeLabels());
    })
  }

  updateColumns() {
    this.columns = [
      'product_category_id',
      'product_category_name',
      'product_category_description',
      'product_category_notes',


      'product_category_notes_internal',
      'product_category_code',      
      {
        columnHeader: this.modelProductCategoryDetails.attributeLabels()['product_category_status_enable'],


        columnValue: function (this: any) {
          let value = 't';
          console.log(this.modelProductCategoryDetails);

          this.modelProductCategoryDetails.STATUS_ENABLE_OBJ.forEach((statusArray: any) => {
            if (statusArray[0] == this.modelProductCategoryDetails.product_category_status_enable) value = statusArray[1];
          });
          return value;
          // this.modelProductCategoryDetails.STATUS_ENABLE_OBJ[]
        }.bind(this)
      }
    ];
  }

}
