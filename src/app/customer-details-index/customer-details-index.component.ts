import { Component, OnInit } from '@angular/core';
import { IndexDetails, NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-index',
  templateUrl: './customer-details-index.component.html',
  styleUrls: ['./customer-details-index.component.css']
})
export class CustomerDetailsIndexComponent implements OnInit {

  constructor(private dbService: NgxIndexedDBService) { }

  
  models: CustomerDetails[] = [];
  breadcrumbItems: any[] = [];
  
  
  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo'  : '',
    },
    {
      'label': CustomerDetails.getClassLabel(),
      'active': true
    }
  ];
    
    this.getFromIndexDB();
  }


  getFromIndexDB(){
    // let index_detail:IndexDetails = {
    //   indexName: 'customer_name',
    //   order: 'asc'
    // }
    this.dbService.getAll(
      'customer_details', 
      // 'customer_name',
      
      // IDBKeyRange.only('customer_id')
      )
      .subscribe((kpis) => {
        console.log(kpis);


        kpis.forEach((kp) => {
          this.models.push(Object.assign(new CustomerDetails(), kp));
        });

        console.log(this.models);
      });      
  }
}
