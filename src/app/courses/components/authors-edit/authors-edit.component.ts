import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.scss']
})
export class AuthorsEditComponent {
  @Input() author?: { id: number; name: string; lastName: string };
}
