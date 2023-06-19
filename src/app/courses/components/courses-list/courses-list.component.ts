import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getMockedCoursesList } from '../../../core/constants/mockedConstants';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  @Output() cardIdToBeDelete = new EventEmitter();

  ngOnInit() {
    console.log('ngOnInit hook works');
    this.courses = getMockedCoursesList();
  }

  handleDeleteCard(id: number) {
    this.cardIdToBeDelete.emit(id);
  }

  trackByCards(index: number, card: Course): number {
    return card.id;
  }
}
