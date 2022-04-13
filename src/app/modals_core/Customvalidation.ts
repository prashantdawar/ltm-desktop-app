import { AbstractControl, ValidationErrors } from "@angular/forms";
import { CommonControlValueAccessor } from "./CommonControlValueAccessor";
export class CustomValidation extends CommonControlValueAccessor {
    modelObj: any = '';
    attributeProp: any = '';
    valid: boolean = false;
    validationMessage: string = "";



    constructor() {
        super();
    }

    assignProp(model: any, attribute: any) {
        this.modelObj = model;
        this.attributeProp = attribute;
    }

    validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        console.log(value);

        let skipSubArrayForEach = false;
        let errorsObj: any = {};
        let modelRulesArray = this.modelObj.rules();
        // console.log(modelRulesArray);
        modelRulesArray.forEach((subArray: any) => {
            // console.log(subArray);
            if (subArray[0].includes(this.attributeProp)) {
                subArray.forEach((subArrayItem: any, index: number) => {

                    if (index == 0) return;
                    if (skipSubArrayForEach) return;

                    switch (subArrayItem) {


                        case 'string': if (typeof value != "string") {
                            errorsObj[this.attributeProp] = {
                                currentType: typeof value,
                                currentValue: value,
                                expectedType: 'string',
                                errMsg: 'String Only'
                            };
                        }
                            break;



                        case 'integer': if (typeof value != "number") {
                            errorsObj[this.attributeProp] = {
                                currentType: typeof value,
                                currentValue: value,
                                expectedType: 'number',
                                errMsg: 'Number Only'
                            };
                        }
                            break;
                        case 'required': if (value != null && value.length == 0) {
                            errorsObj[this.attributeProp] = {
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
            this.validationMessage = errorsObj[this.attributeProp].errMsg;
        }

        return Object.keys(errorsObj).length > 0 ? errorsObj : null;
        // return {'test': 'test'};
        // return errorsObj;
    }
}
