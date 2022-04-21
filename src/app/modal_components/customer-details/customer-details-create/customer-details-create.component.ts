import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../../../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-create',
  templateUrl: './customer-details-create.component.html',
  styleUrls: ['./customer-details-create.component.css']
})



export class CustomerDetailsCreateComponent implements OnInit {
  model: any = new CustomerDetails();

  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }


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
    // const routeParams = this.route.snapshot.paramMap;
    // const customerId = Number(routeParams.get('customerId'));


    // this.getFromIndexDB(customerId);
  }

  onChange(changes: any){
    console.log(changes);
    console.log(this.model);
    // this.model = changes;
    // this.saveModel();
  }

  saveModel(){
    // this.dbService
    // .add('customer_details', this.model)   
    // .subscribe((key) => {
    //   console.log('key: ', key);
    //   // form.reset(); // only working in template-driven form for fixed template.
    //   this.model = null;
    //   this.model = new CustomerDetails();
    // });

    this.model.save(this.dbService)
    .subscribe((key: any) => {
      this.model = null;
      this.model = new CustomerDetails();
      console.log('key:');
      console.log(key);
    })
  }
}