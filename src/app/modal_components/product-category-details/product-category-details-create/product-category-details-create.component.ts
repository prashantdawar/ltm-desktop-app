import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProductCategoryDetails } from 'src/app/modals_data/product_category_details';

@Component({
  selector: 'app-product-category-details-create',


  templateUrl: './product-category-details-create.component.html',
  styleUrls: ['./product-category-details-create.component.css']
})


export class ProductCategoryDetailsCreateComponent implements OnInit {
  model: any = new ProductCategoryDetails();


  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'urlTo': '/product-category-details'
    },
    {
      'label': 'Create Product Category Details',
      'active': true
    }
    ];
  }

  onChange(changes: any){
    this.model = changes;

    this.saveModel();
  }

  saveModel(){
    this.model.save(this.dbService)
    .subscribe((key: any) => {
      this.model = null;
      this.model = new ProductCategoryDetails();
      console.log('key:');
      console.log(key);
    })
  }

}
