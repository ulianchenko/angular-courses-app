import { Component, OnInit } from '@angular/core';
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

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCoursesList();
  }

  onClickLoadMore(): void {
    console.log('Load more');
  }

  onClickDeleteCard(id: number): void {
    console.log(`Card ${id} was deleted`);
    this.deleteCourseConfirmation = confirm(
      'Do you really want to delete this course? Yes/No'
    );
    this.courses = this.coursesService.removeCourse(id);
  }

  handlesearchCourses(courses: Course[]): void {
    this.courses = courses;
  }
}
