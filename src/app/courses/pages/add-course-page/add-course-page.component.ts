import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { createCourse } from '../../helpers/createCourse';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnChanges, OnInit, OnDestroy {
  title: string | undefined;
  description: string | undefined;
  duration: number = 0;
  isEdit: boolean = false;
  routeSub!: Subscription;
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
    this.routeSub = this.route.params.subscribe((params) => {
      if (Number(params['id'])) {
        this.coursesService
          .getCourse(Number(params['id']))
          .subscribe((data: any) => {
            this.course = data;
            this.isEdit = true;
          });
      } else {
        this.course = this.coursesService.emptyCourse;
        this.isEdit = false;
      }
    });
  }

  ngOnChanges() {
    this.title = this.course?.name;
    this.description = this.course?.description;
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onClickSave(): void {
    const courseForAdding = createCourse(
      this.isEdit,
      this.course!,
      this.authService.user
    );
    if (this.isEdit) {
      this.coursesService
        .updateCourse(courseForAdding)
        .subscribe((data: any) => {
          this.coursesService.setUpdatedCourse(data);
        });
    } else {
      this.coursesService
        .createCourse(courseForAdding)
        .subscribe((data: any) => {
          this.coursesService.setUpdatedCourse(data);
        });
    }
    this.router.navigate([this.authService.redirectUrl]);
  }

  onClickCancel(): void {
    this.router.navigate([this.authService.redirectUrl]);
  }

  handleDeleteAuthor(): void {
    console.log('Author was deleted');
  }

  onInputTitle(event: any) {
    this.course!.name = event.target.value;
  }

  onInputDescription(event: any) {
    this.course!.description = event.target.value;
  }

  onInputDuration(duration: string) {
    this.course!.length = Number(duration);
  }
}
