import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../modals_data/customer_details';
@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.css']
})


export class CustomerDetailsFormComponent implements OnInit {
  model = new CustomerDetails();
  breadcrumbItems: any[] = [];

  constructor(private dbService: NgxIndexedDBService) { }



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
    // this.model.customer_name = "test customer name";
  }




  onSubmit(form: any): void {
    console.log('submit');
    // this.model.save();
    console.log("form value");
    console.log(form);
    const data = form.value;
    this.model.beforeSave();
    if (this.model.customer_name) {
      this.dbService.add('customer_details', this.model)
        .subscribe((key) => {
          console.log('key: ', key);
          
          // form.reset(); // only working in template-driven form for fixed template.
          // this.model = new CustomerDetails();
        });
    } else {

      console.log("Fill Fields");
    }
  }
}