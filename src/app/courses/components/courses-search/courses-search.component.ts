import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../../models/course.model';
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
  private searchInputChange: Subject<string> = new Subject<string>();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService
  ) {
    this.fullCoursesList = this.coursesService.courses;
  }
  @Input() courses: Course[] = [];
  @Output() searchText = new EventEmitter();

  onKeyUp(): void {
    this.searchText.emit(this.inputText);
  }
  onInput(event: Event): void {
    this.inputText = (event.target as HTMLInputElement).value;
  }
  onFocusInput(): void {
    this.showIcon = false;
  }
  onBlurInput(): void {
    this.showIcon = true;
  }
}
