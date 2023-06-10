import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mockedCoursesList } from '../../../core/constants/mockedConstants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses = [
    {
      id: 0,
      name: '',
      description: '',
      isTopRated: false,
      date: '',
      length: 157,
      authors: [
        {
          id: 0,
          name: '',
          lastName: ''
        }
      ]
    }
  ];
  @Output() cardIdToBeDelete = new EventEmitter();

  ngOnInit() {
    console.log('ngOnInit hook works');
    this.courses = mockedCoursesList;
  }

  handleDeleteCard(id: any) {
    this.cardIdToBeDelete.emit(id);
  }

  trackByCards(index: number, card: { id: number }): number {
    return card.id;
  }
}
