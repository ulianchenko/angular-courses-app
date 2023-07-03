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
    this.description = event.target.value;
  }
}
