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


  keyUpCount = 0;
  constructor() { }
  onChange = (value: any) => { }; // updates value and triggers validation
  onTouched = () => { };

  ngOnInit(): void {
    let model = this.model;
    let attribute = this.attribute;
    this.label = model.attributeLabels()[attribute];

    this.nameProp = this.attribute;
    this.id = model.getClassName().split(/(?=[A-Z])/).map((name: string) => name.toLowerCase()).join("-");

    // switch (typeof model[attribute]) {
    //   case 'string': this.type = "text"; break;
    //   case 'number': this.type = "number"; break;
    //   default: this.type = "text";
    // }

    let modelRulesArray = model.rules();
    modelRulesArray.forEach((subArray: any) => {
      if (subArray[0].includes(this.attribute)) {



        subArray.forEach((subArrayItem: any, index: number) => {
          if (index == 0) return;

          switch (subArrayItem) {


            case 'string': this.type = "text"; break;
            case 'integer': this.type = "number"; break;
            case 'required': this.required = ''; break;

            default: this.type = "text";
          }
        })
      }
    });
  }
  // ngAfterViewInit(){
  //   console.log(this.modelAttribute.constructor.name);
  // }

  touched() {
    this.onTouched();
    this.is_touched = true;
  }

  onBlur(event: any) {
    console.log("blur");
    this.touched();
    this.updateValue(event);
  }

  updateValue(event: any) {
    console.log("keyup");
    this.value = event.target.value;
    console.log(this.value);
    this.onChange(this.value);
    // this.touched();


    if (this.keyUpCount++) this.touched();
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
    let skipSubArrayForEach = false;
    
    let errorsObj: any = {};
    let modelRulesArray = this.model.rules();
    // console.log(modelRulesArray);
    modelRulesArray.forEach((subArray: any) => {
      // console.log(subArray);

      if (subArray[0].includes(this.attribute)) {
        subArray.forEach((subArrayItem: any, index: number) => {
          if (index == 0) return;
          if (skipSubArrayForEach) return;

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
            case 'integer': if (typeof value != "number") {
              errorsObj[this.attribute] = {
                currentType: typeof value,
                currentValue: value,
                expectedType: 'number',
                errMsg: 'Number Only'
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
              skipSubArrayForEach = true;
              break;
          }
          console.log(errorsObj);
        });

      }
    });
    console.log(errorsObj);

    if (Object.keys(errorsObj).length == 0) {
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