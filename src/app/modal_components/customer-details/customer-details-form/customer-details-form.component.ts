import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerDetails } from '../../../modals_data/customer_details';
@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.css']
})


export class CustomerDetailsFormComponent implements OnInit {
  model: any = new CustomerDetails();


  
  
  
  
  //https://stackoverflow.com/questions/38571812/how-to-detect-when-an-input-value-changes-in-angular
  @Input('model')
  set modelCustomerDetails(value: CustomerDetails) {
    Object.assign(this.model, value);
  }
  @Output() modelChange = new EventEmitter<CustomerDetails>();
  constructor() { }
  ngOnInit(): void {
    console.log(this.model);
    // Object.assign(this.model, this.modelCustomerDetails);
    // console.log(this.model);
  }
  // ngOnChanges is called earlier than ngOnInit.
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   console.log(this.model);
  // }



  onSubmit(form: NgForm): void {
    console.log('submit');
    // this.model.save();
    console.log("form value");
    console.log(form);
    const data = form.value;
    this.model.beforeSave();
    if (form.status == "VALID") {
      this.modelChange.emit(this.model);
      console.log("Event emitted");
    } else {
      
      console.log("Fill Fields");
    }
  }
}