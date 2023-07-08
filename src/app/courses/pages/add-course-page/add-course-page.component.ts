import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
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
            this.title = data.name;
            this.description = data.description;
            this.duration = data.length ?? 0;
            this.isEdit = true;
          });
      } else {
        this.title = '';
        this.description = '';
        this.duration = 0;
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
    const courseForAdding = {
      id: this.isEdit ? this.course!.id : Date.now(),
      name: this.title ?? '',
      date: this.isEdit ? this.course!.date : new Date().toString(),
      length: this.duration,
      authors: this.isEdit
        ? this.course!.authors
        : [
            {
              id: Number(Date.now()) + 1,
              name: `${this.authService.user.name.first} ${this.authService.user.name.last}`,
              lastName: ''
            }
          ],
      isTopRated: this.isEdit ? this.course!.isTopRated : true,
      description: this.description ?? ''
    };
    if (this.isEdit) {
      this.coursesService.updateCourse(courseForAdding);
    } else {
      this.coursesService.createCourse(courseForAdding);
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
    this.title = event.target.value;
  }

  onInputDescription(event: any) {
    this.description = event.target.value;
  }

  onInputDuration(duration: string) {
    this.duration = Number(duration);
  }
}
