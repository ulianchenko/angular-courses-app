import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-duration-edit',
  templateUrl: './duration-edit.component.html',
  styleUrls: ['./duration-edit.component.scss']
})
export class DurationEditComponent {
  @Input() duration?: number;

  onInput(event: any) {
    this.duration = event.target.value;
  }
}
