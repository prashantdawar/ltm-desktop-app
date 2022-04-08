import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bootstrap-form-input',
  templateUrl: './bootstrap-form-input.component.html',
  styleUrls: ['./bootstrap-form-input.component.css']
})



export class BootstrapFormInputComponent implements OnInit {
  id: string = "";
  nameProp: string = "";

  labelFor: string = "";
  type: string = "";


  label: string = "";
  @Input() ngModel: any;
  @Input() model!: any;
  @Input() attribute!: any;
  
  constructor() { }

  ngOnInit(): void {
    // let className = this.modelAttribute.constructor.name;
    // console.log(this.model[this.attribute]);
    let model = this.model;
    let attribute = this.attribute;
    this.type = "text";

    // let modelClassName = model.getClassName();
    this.label = model.attributeLabels()[attribute];
    this.nameProp = this.attribute;
    this.id = model.getClassName().split(/(?=[A-Z])/).map((name: string) => name.toLowerCase()).join("-");


    // console.log(this.id);

    // console.log(" attribute: " + typeof model['customer_name']);
  }

  // ngAfterViewInit(){
  //   console.log(this.modelAttribute.constructor.name);
  // }
}
