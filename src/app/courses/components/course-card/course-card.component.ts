import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  math = Math;
  @Input() topRated: boolean = false;
  @Input() coursesListItem?: Course;
  @Input() cardIndex?: number;
  @Output() cardToDelete = new EventEmitter();
  @Output() cardToEdit = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  editCard(id: number) {
    this.cardToEdit.emit(id);
  }

  deleteCard(id: number) {
    this.cardToDelete.emit(id);
  }
}
