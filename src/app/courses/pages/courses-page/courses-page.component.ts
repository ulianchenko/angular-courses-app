import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { selectCourses } from '../../../store/courses/courses.selectors';
import {
  deleteCourse,
  getCourses,
  loadMoreCourses
} from '../../../store/courses/courses.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  deleteCourseConfirmation: boolean = false;
  coursesLoadStep: number = 4;
  subscriptions: Subscription[] = [];
  deleteConfirmation: string = '';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.store.dispatch(getCourses());

    const getCoursesListSub = this.store
      .select(selectCourses)
      .subscribe((data: Course[]) => {
        this.courses = data;
      });
    this.subscriptions.push(getCoursesListSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickAddCourse(): void {
    this.router.navigateByUrl(`/courses/new`);
    this.coursesLoadStep = 4;
  }

  onClickLoadMore(): void {
    this.store.dispatch(
      loadMoreCourses({ start: this.coursesLoadStep, count: 4 })
    );
    this.coursesLoadStep += 4;
  }

  onClickEditCard(id: number): void {
    this.coursesLoadStep = 4;
    this.router.navigateByUrl(`/courses/${id}`);
  }

  onClickDeleteCard(id: number): void {
    this.deleteCourseConfirmation = confirm(
      'Do you really want to delete this course? Yes/No'
    );
    this.store.dispatch(deleteCourse({ id: id }));
    this.coursesLoadStep = 4;
  }
}
