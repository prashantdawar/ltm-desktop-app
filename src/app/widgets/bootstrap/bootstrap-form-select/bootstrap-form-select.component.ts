import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { CustomValidation } from 'src/app/modals_core/Customvalidation';

@Component({
  selector: 'ngx-bootstrap-form-select',
  templateUrl: './bootstrap-form-select.component.html',
  styleUrls: ['./bootstrap-form-select.component.css'],

providers: [
  {
    provide: NG_VALUE_ACCESSOR,

    multi: true,
    useExisting: BootstrapFormSelectComponent
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: BootstrapFormSelectComponent
  }
]
})

export class BootstrapFormSelectComponent extends CustomValidation implements OnInit, ControlValueAccessor, Validator {
id: string = "id";
nameProp: string = "nameProp";
// labelFor: string = "nameProp";
type: string = "text";
label: string = "label";

// value: any = "test";
required: any = null;




@Input() model: any;
@Input() attribute!: any;
@Input() options: any;
@Input() ngModel: any;
@Output() ngModelChange = new EventEmitter();

constructor() { super(); }

ngOnInit(): void {
  let model = this.model;
  let attribute = this.attribute;
  this.assignProp(this.model, this.attribute);
  
  //------------------------------------------//
  //  Sets Attributes for Input Field 
  //  ( label | name | id | type )
  //--------------------------------------------
  
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
  //-------------------------------------------\\
}
// ngAfterViewInit(){
//   console.log(this.modelAttribute.constructor.name);
// }

}