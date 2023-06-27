import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-edit',
  templateUrl: './date-edit.component.html',
  styleUrls: ['./date-edit.component.scss']
})
export class DateEditComponent {
  @Input() date: string | undefined = '';

  onInput(event: any) {
    this.date = event.target.value;
  }
}
