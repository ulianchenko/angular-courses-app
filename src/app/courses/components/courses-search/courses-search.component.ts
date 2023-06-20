import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { FilterByNamePipe } from '../../../shared/pipes/filter-by-name.pipe';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  inputText: string = '';
  showIcon: boolean = true;
  filterByNamePipe?: FilterByNamePipe = new FilterByNamePipe();
  @Input() courses: Course[] = [];
  @Output() filteredCourses = new EventEmitter();

  onClickSearch() {
    this.filteredCourses.emit(this.filterByNamePipe?.transform(this.inputText));
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
