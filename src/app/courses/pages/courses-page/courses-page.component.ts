import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  deleteCourseConfirmation: boolean = false;
  subscriptions?: Subscription[];
  @Output() cardToEdit = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    const getCoursesListSub = this.coursesService
      .getCoursesList()
      .subscribe((data: Course[]) => {
        this.courses = data;
      });
    this.subscriptions?.push(getCoursesListSub);

    const getUpdatedCoursesSub = this.coursesService
      .getUpdatedCourses()
      .pipe(switchMap(() => this.coursesService.getCoursesList()))
      .subscribe((courses: Course[]) => (this.courses = courses));
    this.subscriptions?.push(getUpdatedCoursesSub);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  onClickAddCourse(): void {
    const course = this.coursesService.emptyCourse;
    this.cardToEdit.emit(course);
    this.router.navigateByUrl(`/courses/new`);
  }

  onClickLoadMore(): void {
    this.coursesService.coursesLoadStep += 4;
    const getCoursesListSub = this.coursesService
      .getCoursesList()
      .subscribe((data: Course[]) => (this.courses = data));
    this.subscriptions?.push(getCoursesListSub);
  }

  onClickEditCard(id: number): void {
    const getCourseSub = this.coursesService
      .getCourse(id)
      .subscribe((data: Course) => {
        this.cardToEdit.emit(data);
      });
    this.subscriptions?.push(getCourseSub);
  }

  onClickDeleteCard(id: number): void {
    this.deleteCourseConfirmation = confirm(
      'Do you really want to delete this course? Yes/No'
    );
    const getCoursesListSub = this.coursesService
      .removeCourse(id)
      .pipe(switchMap(() => this.coursesService.getCoursesList()))
      .subscribe((data: Course[]) => {
        this.courses = data;
      });
    this.subscriptions?.push(getCoursesListSub);
  }

  handleSearchCourses(searchText: string): void {
    this.coursesService.textFragment = searchText;
    const getFilteredCoursesListSub = this.coursesService
      .getFilteredCoursesList()
      .subscribe((data: Course[]) => {
        this.courses = data;
      });
    this.subscriptions?.push(getFilteredCoursesListSub);
  }
}
