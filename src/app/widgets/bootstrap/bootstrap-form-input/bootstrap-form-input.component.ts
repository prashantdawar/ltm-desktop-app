import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-form-input',
  templateUrl: './bootstrap-form-input.component.html',
  styleUrls: ['./bootstrap-form-input.component.css']
})



export class BootstrapFormInputComponent implements OnInit {
  id: string = "";
  name: string = "";

  labelFor: string = "";
  type: string = "";


  label: string = "";

  @Input() model!: any;
  @Input() attribute!: any;
  
  constructor() { }

  ngOnInit(): void {
    // let className = this.modelAttribute.constructor.name;
    console.log(this.model[this.attribute]);
    let model = this.model;
    let attribute = this.attribute;


    // let modelClassName = model.getClassName();
    this.label = model.attributeLabels()[attribute];

    // this.id = model.
  }

  // ngAfterViewInit(){
  //   console.log(this.modelAttribute.constructor.name);
  // }
}
