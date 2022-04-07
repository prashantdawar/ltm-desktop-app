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

  constructor(private dbService: NgxIndexedDBService) { }



  ngOnInit(): void {
  }


  
  onSubmit(form: any): void {
    console.log('submit');
    // this.model.save();

    const data = form.value;
    this.model.beforeSave();
    if (data.customer_name) {
      this.dbService.add('customer_details', this.model)
        
      .subscribe((key) => {
          console.log('key: ', key);
          form.reset();
        });
    } else {

      console.log("Fill Fields");
    }
  }
}