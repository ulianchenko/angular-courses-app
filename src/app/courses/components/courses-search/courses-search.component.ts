import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { FilterByNamePipe } from '../../../shared/pipes/filter-by-name.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  inputText: string = '';
  showIcon: boolean = true;
  fullCoursesList: Course[];
  constructor(
    // eslint-disable-next-line no-unused-vars
    private filterByNamePipe: FilterByNamePipe,
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService
  ) {
    this.fullCoursesList = this.coursesService.getCoursesList();
  }
  @Input() courses: Course[] = [];
  @Output() filteredCourses = new EventEmitter();

  onClickSearch() {
    this.filteredCourses.emit(
      this.filterByNamePipe.transform(this.fullCoursesList, this.inputText)
      // this.filterByNamePipe.transform(this.courses, this.inputText)
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
