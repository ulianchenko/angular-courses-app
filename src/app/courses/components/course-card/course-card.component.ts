import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { CoursesItemDataService } from '../../services/courses-item-data.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  providers: [CoursesItemDataService]
})
export class CourseCardComponent implements OnInit {
  editButtonText: string = 'Edit';
  editButtonClass: string = 'edit';
  deleteButtonText: string = 'Delete';
  deleteButtonClass: string = 'delete';
  card: Course = {
    id: 0,
    title: '',
    creationDate: '',
    duration: '',
    description: ''
  };

  @Input() coursesListItem = {
    id: 0,
    name: '',
    date: '',
    length: 0,
    description: ''
  };
  @Input() cardIndex: number = 1;
  @Output() clickDelete = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesItemDataService: CoursesItemDataService) {}
  ngOnInit() {
    this.card.id = this.coursesListItem.id;
    this.card.title = this.coursesItemDataService.modifyTitle(
      this.coursesListItem.name,
      this.cardIndex
    );

    this.card.creationDate = this.coursesItemDataService.modifyCreationDate(
      this.coursesListItem.date
    );

    this.card.duration = this.coursesItemDataService.modifyDuration(
      this.coursesListItem.length
    );
    this.card.description = this.coursesListItem.description;
  }
  editCard(id: number) {
    console.log(`Card ${id} was edited`);
  }

  deleteCard(id: number) {
    this.clickDelete.emit(id);
  }
}
