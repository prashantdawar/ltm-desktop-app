import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

}
