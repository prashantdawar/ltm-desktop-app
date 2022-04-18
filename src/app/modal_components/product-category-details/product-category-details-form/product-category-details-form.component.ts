import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategoryDetails } from 'src/app/modals_data/product_category_details';

@Component({
  selector: 'app-product-category-details-form',
  templateUrl: './product-category-details-form.component.html',
  styleUrls: ['./product-category-details-form.component.css']
})


export class ProductCategoryDetailsFormComponent implements OnInit {
  
  
  @Input() model: ProductCategoryDetails = new ProductCategoryDetails();
  @Output() modelChange = new EventEmitter<ProductCategoryDetails>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log('submit');
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
