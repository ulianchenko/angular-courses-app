import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-duration-edit',
  templateUrl: './duration-edit.component.html',
  styleUrls: ['./duration-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DurationEditComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DurationEditComponent,
      multi: true
    }
  ]
})
export class DurationEditComponent implements ControlValueAccessor, Validator {
  @Input() duration: number = 1;
  @Output() durationInput = new EventEmitter();
  control: FormControl;
  invalidNumber = false;
  // eslint-disable-next-line no-unused-vars
  private onChange: (value: number) => void = () => {};
  private onTouch: () => void = () => {};

  constructor() {
    this.control = new FormControl(this.duration);
  }

  writeValue(value: any): void {
    if (value !== null && value !== undefined) {
      this.duration = value;
      this.control.setValue(this.duration);
    }
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value !== null && value !== undefined) {
      const isValidContent = /[0-9]/.test(value);
      const isValidAmount = value && value > 0;
      const isValid = isValidContent && isValidAmount;
      this.invalidNumber = this.control.touched && !isValid;
      return isValid ? null : { invalidNumber: true };
    }
    return null;
  }

  onInput(duration: number) {
    this.duration = duration;
    this.durationInput.emit(this.duration);
    this.onChange(this.duration);
    this.onTouch();
    this.control.updateValueAndValidity();
  }
}
