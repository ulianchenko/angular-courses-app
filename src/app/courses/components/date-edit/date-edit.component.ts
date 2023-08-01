import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-date-edit',
  templateUrl: './date-edit.component.html',
  styleUrls: ['./date-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateEditComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateEditComponent),
      multi: true
    }
  ]
})
export class DateEditComponent implements ControlValueAccessor, Validator {
  @Input() date: string = '';
  @Input() courseForm: FormGroup;
  @Output() dateChanged = new EventEmitter();
  // eslint-disable-next-line no-unused-vars
  private onChange: (value: string) => void = () => {};
  private onTouch: () => void = () => {};
  touched: boolean = false;

  constructor() {
    this.courseForm = new FormGroup({
      date: new FormControl('', [Validators.required])
    });
  }

  validate(control: FormControl): { [key: string]: boolean } | null {
    if (!this.onTouch || !this.touched) {
      return null;
    }

    const date = control.value;
    if (
      Validators.required(control) ||
      (date && !this.isValidDateFormat(date))
    ) {
      return {
        invalidDate: true
      };
    }
    return null;
  }

  writeValue(value: string) {
    if (value) {
      const dateObject = new Date(value);
      const year = dateObject.getFullYear();
      const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
      const day = ('0' + dateObject.getDate()).slice(-2);
      this.date = `${day}/${month}/${year}`;
    } else {
      this.date = '';
    }
  }

  registerOnChange(fn: () => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

  onInput(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
    this.dateChanged.emit(this.date);
    this.onChange(this.date);
    this.onTouch();
    this.touched = true;

    if (this.date.trim() === '') {
      this.courseForm.controls['date'].setErrors({ required: true });
    } else {
      this.courseForm.controls['date'].setErrors(null);
    }
  }

  isValidDateFormat(date: string) {
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return pattern.test(date);
  }

  onTouchHandler() {
    this.touched = true;
  }
}
