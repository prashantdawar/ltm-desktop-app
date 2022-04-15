import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-create',
  templateUrl: './customer-details-create.component.html',
  styleUrls: ['./customer-details-create.component.css']
})



export class CustomerDetailsCreateComponent implements OnInit {
  model: any = new CustomerDetails();

  breadcrumbItems: any[] = [];
  constructor() { }


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
      'label': 'Create Customer Details',
      'active': true
    }
    ];
  }
}