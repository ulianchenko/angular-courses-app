import { Component, Input } from '@angular/core';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.scss']
})
export class AuthorsEditComponent {
  @Input() author?: Author;
}
