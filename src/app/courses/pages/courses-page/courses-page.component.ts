import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[] = [];
  deleteCourseConfirmation: boolean = false;
  @Output() cardToEdit = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCoursesList();
  }

  onClickAddCourse(): void {
    const course = this.coursesService.getCourse();
    this.cardToEdit.emit(course);
  }

  onClickLoadMore(): void {
    console.log('Load more');
  }

  onClickEditCard(id: number): void {
    const course = this.coursesService.getCourse(id);
    this.cardToEdit.emit(course);
  }

  onClickDeleteCard(id: number): void {
    this.deleteCourseConfirmation = confirm(
      'Do you really want to delete this course? Yes/No'
    );
    this.courses = this.coursesService.removeCourse(id);
  }

  handleSearchCourses(courses: Course[]): void {
    this.courses = courses;
  }
}
