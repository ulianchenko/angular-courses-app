import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() cardIdToBeDelete = new EventEmitter();

  handleDeleteCard(id: number) {
    this.cardIdToBeDelete.emit(id);
  }

  trackByCards(index: number, card: Course): number {
    return card.id;
  }
}
