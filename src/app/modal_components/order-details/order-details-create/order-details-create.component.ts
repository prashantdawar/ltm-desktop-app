import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { OrderDetails } from 'src/app/modals_data/order_details';

@Component({
  selector: 'app-order-details-create',
  templateUrl: './order-details-create.component.html',
  styleUrls: ['./order-details-create.component.css']
})


export class OrderDetailsCreateComponent implements OnInit {
  model: any = new OrderDetails();


  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'urlTo': '/order-details'
    },
    {
      'label': 'Create Order Details',
      'active': true
    }
    ];
  }

  onChange(changes: any) {
    this.model = changes;

    this.saveModel();
  }

  saveModel() {
    this.model.save(this.dbService)
      .subscribe((key: any) => {
        this.model = null;
        this.model = new OrderDetails();
        console.log('key:');
        console.log(key);
      })
  }
}