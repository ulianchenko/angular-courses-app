import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses/models/course.model';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    return courses.sort(
      (prevCourse, nextCourse) =>
        new Date(prevCourse.date).getTime() -
        new Date(nextCourse.date).getTime()
    );
  }
}
