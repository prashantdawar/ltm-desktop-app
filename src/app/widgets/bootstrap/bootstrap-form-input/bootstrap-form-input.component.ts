import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'ngx-bootstrap-form-input',
  templateUrl: './bootstrap-form-input.component.html',
  styleUrls: ['./bootstrap-form-input.component.css'],



  providers: [
    {
      provide: NG_VALUE_ACCESSOR,

      multi: true,
      useExisting: BootstrapFormInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BootstrapFormInputComponent
    }
  ]
})
export class BootstrapFormInputComponent implements OnInit, ControlValueAccessor, Validator {
  id: string = "id";
  nameProp: string = "nameProp";
  labelFor: string = "nameProp";
  type: string = "tex";
  disabled = false;
  is_touched: boolean = false;

  valid: boolean = false;
  validationMessage: string = "";
  value: any = "test";
  label: string = "label";
  
  
  required: any = null;
  @Input() model: any;
  @Input() attribute!: any;
  @Input() ngModel: any;
  @Output() ngModelChange = new EventEmitter();

  constructor() { }
  onChange = (value: any) => { };
  onTouched = () => { };

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

    // console.log("typeof");
    // console.log(typeof model);
    // console.log(this.id);
    switch (typeof model[attribute]) {
      case 'string': this.type = "text"; break;
      case 'number': this.type = "number"; break;
      default: this.type = "text";
    }


    // console.log(" attribute: " + typeof model['customer_name']);    
    let modelRulesArray = model.rules();

    modelRulesArray.forEach((subArray: any) => {


      switch (subArray[subArray.length - 1]) {
        case 'required': this.required = subArray[0].includes(attribute) ? '' : null; break;
      }
    });
  }
  // ngAfterViewInit(){
  //   console.log(this.modelAttribute.constructor.name);
  // }


  touched(){
    this.onTouched();
    this.is_touched = true;
  }
  onBlur(event: any) {
    this.touched();
  }

  updateValue(event: any) {
    this.value = event.target.value;
    // console.log(this.value);

    this.onChange(this.value);
    // this.onTouched();
    this.touched();
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    console.log(value);

    let errorsObj: any = {};
    let modelRulesArray = this.model.rules();
    // console.log(modelRulesArray);
    modelRulesArray.forEach((subArray: any) => {
      // console.log(subArray);

      if (subArray[0].includes(this.attribute)) {
        subArray.forEach((subArrayItem: any, index: number) => {
          if (index == 0) return;

          switch (subArrayItem) {
            case 'string': if (typeof value != "string") {
              errorsObj[this.attribute] = {
                currentType: typeof value,
                currentValue: value,
                expectedType: 'string',
                errMsg: 'String Only'
              };
            }
              break;
            case 'number': if (typeof value != "number") {
              errorsObj[this.attribute] = {
                currentType: typeof value,
                currentValue: value,
                expectedType: 'number',
                errMsg: 'number'
              };
            }
              break;
            case 'required': if (value != null && value.length == 0) {
              errorsObj[this.attribute] = {
                currentType: typeof value,
                currentValue: value,
                required: true,
                errMsg: 'Field is marked as required'
              };
            }
              break;
          }
        });

      }
    });
    console.log(errorsObj);

    if(Object.keys(errorsObj).length == 0){
      this.valid = true;
      this.validationMessage = "";
    } else {
      this.valid = false;
      this.validationMessage = errorsObj[this.attribute].errMsg;
    }

    return Object.keys(errorsObj).length > 0 ? errorsObj : null;
    // return {'test': 'test'};
    // return errorsObj;
  }
}
