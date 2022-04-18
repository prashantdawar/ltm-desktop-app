import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProductDetails } from '../../../modals_data/product_details';

@Component({
  selector: 'app-product-details-index',
  templateUrl: './product-details-index.component.html',
  styleUrls: ['./product-details-index.component.css']
})



export class ProductDetailsIndexComponent implements OnInit {
models: ProductDetails[] = [];
  
constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.getFromIndexDB()
  }


  getFromIndexDB(){

    this.dbService
    .getAll('product_details')
    .subscribe((kpis) => {
      kpis.forEach((kp) => {
        this.models.push(Object.assign(new ProductDetails(), kp));
      });
      // console.log(this.models);
    });
  }
}
