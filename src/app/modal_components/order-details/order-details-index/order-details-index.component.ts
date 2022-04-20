import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { OrderDetails } from 'src/app/modals_data/order_details';
@Component({
  selector: 'app-order-details-index',
  templateUrl: './order-details-index.component.html',
  styleUrls: ['./order-details-index.component.css']
})


export class OrderDetailsIndexComponent implements OnInit {
  model: OrderDetails = new OrderDetails();
  constructor(private dbService: NgxIndexedDBService) { }

  models: OrderDetails[] = [];
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
  }

}
