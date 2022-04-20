import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProductCategoryDetails } from 'src/app/modals_data/product_category_details';






@Component({
  selector: 'app-product-category-details-update',
  templateUrl: './product-category-details-update.component.html',

  styleUrls: ['./product-category-details-update.component.css']
})


export class ProductCategoryDetailsUpdateComponent implements OnInit {
  model: any = new ProductCategoryDetails();
  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService, private router: Router) { }

  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'urlTo': '/customer-details'
    },
    {
      'label': 'Update Product Category Details',
      'active': true
    }
    ];

    const routeParams = this.route.snapshot.paramMap;
    const productCategoryId = Number(routeParams.get('productCategoryId'));

    this.getFromIndexDB(productCategoryId);
  }

  onChange(changes: any) {
    console.log(changes);
    this.model = changes;
    this.updateModel();
  }

  getFromIndexDB(productCategoryId: number) {
    this.model
      .findOne(this.dbService, productCategoryId)
      .subscribe((productCategory: ProductCategoryDetails) => {
        console.log(productCategory);
        this.model = Object.assign(new ProductCategoryDetails(), productCategory);        
      });
  }

  updateModel() {
    this.model.save(this.dbService)
      .subscribe((key: any) => {
        this.router.navigate(['../../view', this.model.product_category_id], { relativeTo: this.route }); this.model = null;
        this.model = new ProductCategoryDetails();
        console.log('key:');
        console.log(key);
      })
  }
}