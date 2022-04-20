import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from 'src/app/modals_data/order_details';







@Component({
  selector: 'app-order-details-form',
  templateUrl: './order-details-form.component.html',

  styleUrls: ['./order-details-form.component.css']
})


export class OrderDetailsFormComponent implements OnInit {
  @Input() model: OrderDetails = new OrderDetails;
  @Output() modelChange = new EventEmitter<OrderDetails>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

  }
}
