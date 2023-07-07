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
      this.course = this.coursesService.getCourse(Number(params['id']));
      this.title = this.course?.name;
      this.description = this.course?.description;
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
      id: Date.now(),
      name: this.title ?? '',
      date: new Date().toString(),
      length: this.duration,
      authors: [
        {
          id: Number(Date.now()) + 1,
          name: `${this.authService.user.name.first} ${this.authService.user.name.last}`,
          lastName: ''
        }
      ],
      isTopRated: true,
      description: this.description ?? ''
    };
    this.coursesService.createCourse(courseForAdding);
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
