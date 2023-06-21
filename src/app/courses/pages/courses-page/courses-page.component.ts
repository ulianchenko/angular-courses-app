import { Component, OnInit } from '@angular/core';
import { getMockedCoursesList } from '../../../core/constants/mockedConstants';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit() {
    this.courses = getMockedCoursesList();
  }

  onClickLoadMore() {
    console.log('Load more');
  }

  onClickDeleteCard(id: any) {
    console.log(`Card ${id} was deleted`);
  }

  handlesearchCourses(courses: Course[]) {
    this.courses = courses;
  }
}
