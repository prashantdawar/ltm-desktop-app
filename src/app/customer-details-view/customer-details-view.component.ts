import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-view',
  
  
  
  templateUrl: './customer-details-view.component.html',
  styleUrls: ['./customer-details-view.component.css']
})

export class CustomerDetailsViewComponent implements OnInit {
  breadcrumbItems: any[] = [];


  customer!: CustomerDetails;  
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }



  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': (new CustomerDetails()).getClassLabel(),
      'urlTo': '/customer-details',
     
      'active': true
    },
    {
      'label': (new CustomerDetails()).getClassLabel(),
      'active': true
    }
    ];

    const routeParams = this.route.snapshot.paramMap;
    const customerId = Number(routeParams.get('customerId'));

    
    this.getFromIndexDB(customerId);
  }

  
  
  
  getFromIndexDB(customerId: number){
    this.dbService
    .getByKey('customer_details', customerId)
    .subscribe((customer) => {
  
      console.log(customer);
      this.customer = Object.assign(new CustomerDetails(), customer);
      // console.log(this.customer.attributeLabels());
    })
  }
}
