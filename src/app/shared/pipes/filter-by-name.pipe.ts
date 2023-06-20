import { Pipe, PipeTransform } from '@angular/core';
import { getMockedCoursesList } from 'src/app/core/constants/mockedConstants';
import { Course } from 'src/app/courses/models/course.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(inputText: string): Course[] | [] {
    return getMockedCoursesList().filter((course) =>
      course.name.toLowerCase().includes(inputText.toLowerCase())
    );
  }
}
