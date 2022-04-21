export class CommonControlValueAccessor {
    value: any = "test";
    is_touched: boolean = false;
    keyUpCount = 0;
    disabled = false;
    onChange = (value: any) => { }; // updates value and triggers validation
    onTouched = () => { };



    touched() {
        this.onTouched();
        this.is_touched = true;
    }




    onBlur(event: any) {
        // console.log("blur");
        this.touched();
        this.updateValue(event);

        this.value = (event.target.tagName == 'SELECT' && event.target.value.length > 0) ? +event.target.value : event.target.value;
        this.onChange(this.value);
    }

    updateValue(event: any) {
        // console.log("keyup");
        this.value = (event.target.tagName == 'SELECT' && event.target.value.length > 0) ? +event.target.value : event.target.value;
        // this.value = event.target.value;
        // console.log(this.value);
        // this.onChange(this.value);
        // this.touched();
        if (this.keyUpCount++) {
            this.touched();
            this.onChange(this.value);
        }
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
}