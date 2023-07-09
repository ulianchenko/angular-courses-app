import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-duration-edit',
  templateUrl: './duration-edit.component.html',
  styleUrls: ['./duration-edit.component.scss']
})
export class DurationEditComponent {
  @Input() duration?: number;
  @Output() durationInput = new EventEmitter();

  onInput(event: Event) {
    this.durationInput.emit((<HTMLInputElement>event.target).value);
    this.duration = Number((<HTMLInputElement>event.target).value) || 0;
  }
}
