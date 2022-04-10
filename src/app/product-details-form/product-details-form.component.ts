import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProductDetails } from '../modals_data/product_details';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.css']
})

export class ProductDetailsFormComponent implements OnInit {
  model = new ProductDetails();
  constructor(private dbService: NgxIndexedDBService) { }


  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this)

    const data = form.value;

    this.model.beforeSave();
    if (data.product_name) {
      this.dbService
        .add('product_details', this.model)
        .subscribe((key) => {
          console.log('key: ', key);
          form.reset();
        })
        
    } else {
      console.log('Fill Fields');
    }
  }
}
