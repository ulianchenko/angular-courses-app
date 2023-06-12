import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  math = Math;
  @Input() coursesListItem?: Course;
  @Input() cardIndex: number = 1;
  @Output() clickDelete = new EventEmitter();

  editCard(id: number) {
    console.log(`Card ${id} was edited`);
  }

  deleteCard(id: number) {
    this.clickDelete.emit(id);
  }
}
