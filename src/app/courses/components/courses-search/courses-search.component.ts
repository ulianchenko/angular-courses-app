import { Component } from '@angular/core';
import { Subject, debounceTime, filter, switchMap } from 'rxjs';
import { LoadingService } from '../../../core/services/loading.service';
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
    private coursesService: CoursesService,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService
  ) {
    this.fullCoursesList = this.coursesService.courses;
  }
  onKeyUp(): void {
    this.searchInputChange
      .pipe(
        debounceTime(500),
        filter((inputText: string) => inputText.length > 3),
        switchMap(() => {
          return this.coursesService.getFilteredCoursesList(this.inputText);
        })
      )
      .subscribe((courses: Course[]) => {
        this.coursesService.setUpdatedCoursesList(courses);
        this.loadingService.setLoadingChange(false);
      });
  }
  onInput(event: Event): void {
    this.inputText = (event.target as HTMLInputElement).value;
    this.searchInputChange.next((event.target as HTMLInputElement).value);
  }
  onFocusInput(): void {
    this.showIcon = false;
  }
  onBlurInput(): void {
    this.showIcon = true;
  }
}
