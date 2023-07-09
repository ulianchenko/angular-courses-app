import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { createCourse } from '../../helpers/createCourse';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  isEdit: boolean = false;
  subscriptions: Subscription[] = [];
  @Input() course?: Course;
  constructor(
    // eslint-disable-next-line no-unused-vars
    private route: ActivatedRoute,
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  ngOnInit() {
    const routeSub = this.route.params
      .pipe(
        switchMap((params) => {
          if (Number(params['id'])) {
            return this.coursesService.getCourse(Number(params['id'])).pipe(
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
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickSave(): void {
    const courseForAdding = createCourse(
      this.isEdit,
      this.course!,
      this.authService.user
    );
    if (this.isEdit) {
      const updateCourseSub = this.coursesService
        .updateCourse(courseForAdding)
        .subscribe((data: Course) => {
          this.coursesService.setUpdatedCourse(data);
        });
      this.subscriptions.push(updateCourseSub);
    } else {
      const createCourseSub = this.coursesService
        .createCourse(courseForAdding)
        .subscribe((data: Course) => {
          this.coursesService.setUpdatedCourse(data);
        });
      this.subscriptions.push(createCourseSub);
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
    this.course!.name = (<HTMLInputElement>event.target).value;
  }

  onInputDescription(event: Event) {
    this.course!.description = (<HTMLInputElement>event.target).value;
  }

  onInputDuration(duration: string) {
    this.course!.length = Number(duration);
  }
}
