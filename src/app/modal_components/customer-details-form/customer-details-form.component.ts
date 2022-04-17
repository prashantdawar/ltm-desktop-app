import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../../modals_data/customer_details';






@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',

  styleUrls: ['./customer-details-form.component.css']
})


export class CustomerDetailsFormComponent implements OnInit {

  @Input() model: CustomerDetails = new CustomerDetails();
  @Output() modelChange = new EventEmitter<any>();

  constructor() { }


  ngOnInit(): void {

    // this.model.customer_name = "test customer name";
  }

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