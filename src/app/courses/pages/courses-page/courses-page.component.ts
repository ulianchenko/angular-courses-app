import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { LoadingService } from '../../../core/services/loading.service';
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
  subscriptions: Subscription[] = [];
  @Output() cardToEdit = new EventEmitter();

  constructor(
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    const getCoursesListSub = this.coursesService
      .getCoursesList()
      .subscribe((data: Course[]) => {
        this.courses = data;
        this.loadingService.setLoadingChange(false);
      });
    this.subscriptions.push(getCoursesListSub);

    const getUpdatedCoursesSub = this.coursesService
      .getUpdatedCourse()
      .pipe(
        switchMap(() => {
          return this.coursesService.getCoursesList();
        })
      )
      .subscribe((courses: Course[]) => {
        this.courses = courses;
        this.loadingService.setLoadingChange(false);
      });
    this.subscriptions.push(getUpdatedCoursesSub);

    const getUpdatedCoursesListSub = this.coursesService
      .getUpdatedCoursesList()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
        this.loadingService.setLoadingChange(false);
      });
    this.subscriptions.push(getUpdatedCoursesListSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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
      .subscribe((data: Course[]) => {
        this.courses = data;
        this.loadingService.setLoadingChange(false);
      });
    this.subscriptions.push(getCoursesListSub);
  }

  onClickEditCard(id: number): void {
    const getCourseSub = this.coursesService
      .getCourse(id)
      .subscribe((data: Course) => {
        this.cardToEdit.emit(data);
      });
    this.subscriptions.push(getCourseSub);
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
    this.subscriptions.push(getCoursesListSub);
  }
}
