import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProductCategoryDetails } from 'src/app/modals_data/product_category_details';
@Component({
  selector: 'app-product-category-details-index',
  templateUrl: './product-category-details-index.component.html',
  styleUrls: ['./product-category-details-index.component.css']
})


export class ProductCategoryDetailsIndexComponent implements OnInit {
  model: ProductCategoryDetails = new ProductCategoryDetails();
  constructor(private dbService: NgxIndexedDBService) { }

  models: ProductCategoryDetails[] = [];
  breadcrumbItems: object[] = [];


  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'active': true
    }
    ];

    this.model
    .find(this.dbService)
    
    .subscribe((kpis) => {
      console.log(kpis);
      kpis.forEach((kp) => {
        this.models.push(Object.assign(new ProductCategoryDetails(), kp));
      });

      console.log(this.models);
    });
  }
}