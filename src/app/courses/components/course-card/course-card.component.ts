import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
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

  editCard(id: number) {
    console.log(`Card ${id} was edited`);
    this.cardToEdit.emit(id);
  }

  deleteCard(id: number) {
    this.cardToDelete.emit(id);
  }
}
