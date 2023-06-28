import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() cardIdToBeEdited = new EventEmitter();
  @Output() cardIdToBeDeleted = new EventEmitter();

  handleEditCard(id: number) {
    this.cardIdToBeEdited.emit(id);
  }

  handleDeleteCard(id: number) {
    this.cardIdToBeDeleted.emit(id);
  }

  trackByCards(index: number, card: Course): number {
    return card.id;
  }
}
