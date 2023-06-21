import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses/models/course.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(courses: Course[], inputText: string): Course[] {
    return courses.filter((course) =>
      course.name.toLowerCase().includes(inputText.toLowerCase())
    );
  }
}
