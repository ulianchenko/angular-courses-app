import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-edit',
  templateUrl: './date-edit.component.html',
  styleUrls: ['./date-edit.component.scss']
})
export class DateEditComponent {
  @Input() date?: string;

  onInput(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
  }
}
