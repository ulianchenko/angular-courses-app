import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { FilterByNamePipe } from '../../../shared/pipes/filter-by-name.pipe';
import { getMockedCoursesList } from 'src/app/core/constants/mockedConstants';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  inputText: string = '';
  showIcon: boolean = true;
  fullCoursesList: Course[];
  // eslint-disable-next-line no-unused-vars
  constructor(private filterByNamePipe: FilterByNamePipe) {
    this.fullCoursesList = getMockedCoursesList();
  }
  @Input() courses: Course[] = [];
  @Output() filteredCourses = new EventEmitter();

  onClickSearch() {
    this.filteredCourses.emit(
      this.filterByNamePipe.transform(this.fullCoursesList, this.inputText)
    );
    this.inputText = '';
  }
  onInput(event: any) {
    this.inputText = event.target.value;
  }
  onFocusInput() {
    this.showIcon = false;
  }
  onBlurInput() {
    this.showIcon = true;
  }
}
