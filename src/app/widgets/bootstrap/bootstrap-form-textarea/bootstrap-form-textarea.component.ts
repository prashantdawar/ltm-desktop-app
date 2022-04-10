import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'ngx-bootstrap-form-textarea',
  templateUrl: './bootstrap-form-textarea.component.html',
  styleUrls: ['./bootstrap-form-textarea.component.css'],
  
  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,

      multi: true,
      useExisting: BootstrapFormTextareaComponent
    }
  ]
})

export class BootstrapFormTextareaComponent implements OnInit, ControlValueAccessor {


  id: string = "id";
  nameProp: string = "nameProp";
  labelFor: string = "nameProp";
  disabled = false;
  value: any = "test";
  label: string = "label"; 



  @Input() model!: any;
  @Input() attribute!: any; 
  @Input() ngModel: any;
  @Output() ngModelChange = new EventEmitter();


  constructor() { }
    
  onChange = (value: any) => { };
  onTouched = () => {};

  ngOnInit(): void {
    // let className = this.modelAttribute.constructor.name;
    // console.log(this.model[this.attribute]);
    let model = this.model;
    let attribute = this.attribute;
    // this.type = "text";

    // let modelClassName = model.getClassName();
    this.label = model.attributeLabels()[attribute];
    this.nameProp = this.attribute;
    this.id = model.getClassName().split(/(?=[A-Z])/).map((name: string) => name.toLowerCase()).join("-");

  }

  updateValue(event: any) {
    this.value = event.target.value;
    // console.log(this.value);
    this.onChange(this.value);
    this.onTouched();
  }
  
  writeValue(value: any): void {
    this.value = value;
  //   console.log("value: ")
  //   console.log(value);
  }
  
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  
  
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }


  setDisabledState(disabled: boolean){
    this.disabled = disabled;
  }
}
