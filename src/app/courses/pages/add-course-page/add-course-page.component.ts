import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { createCourse } from '../../helpers/createCourse';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import {
  createNewCourse,
  updateCourse
} from '../../../store/courses/courses.actions';
import { selectUser } from 'src/app/store/auth/auth.selectors';
import { UserEntity } from '../../../core/models/user.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  isEdit: boolean = false;
  subscriptions: Subscription[] = [];
  course: Course;
  user!: UserEntity;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private route: ActivatedRoute,
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store
  ) {
    this.course = this.coursesService.emptyCourse;
  }

  ngOnInit() {
    const routeSub = this.route.params
      .pipe(
        switchMap((params) => {
          const courseId: number = Number(params['id']);
          if (courseId) {
            return this.coursesService.fetchCourse(courseId).pipe(
              tap((data: Course) => {
                this.course = data;
                this.isEdit = true;
              })
            );
          } else {
            this.course = this.coursesService.emptyCourse;
            this.isEdit = false;
            return of(null);
          }
        })
      )
      .subscribe();
    this.subscriptions.push(routeSub);

    const getUserInfoSub = this.store
      .select(selectUser)
      .subscribe((user: UserEntity) => {
        this.user = user;
      });
    this.subscriptions.push(getUserInfoSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickSave(): void {
    const courseForAdding = createCourse(this.isEdit, this.course!, this.user);
    if (this.isEdit) {
      this.store.dispatch(updateCourse({ newCourse: courseForAdding }));
    } else {
      this.store.dispatch(createNewCourse({ newCourse: courseForAdding }));
      this.course = this.coursesService.emptyCourse;
      this.isEdit = false;
    }
    this.router.navigate([this.authService.redirectUrl]);
  }

  onClickCancel(): void {
    this.router.navigate([this.authService.redirectUrl]);
  }

  handleDeleteAuthor(): void {
    console.log('Author was deleted');
  }

  onInputTitle(event: Event) {
    this.course!.name = (event.target as HTMLInputElement).value;
  }

  onInputDescription(event: Event) {
    this.course!.description = (event.target as HTMLInputElement).value;
  }

  onInputDuration(duration: string) {
    this.course!.length = Number(duration);
  }
}
