import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadCrumb } from '../../models/breadcrumb.model';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Store } from '@ngrx/store';
import { selectCourses } from 'src/app/store/courses/courses.selectors';
import { Course } from 'src/app/courses/models/course.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbs?: BreadCrumb[];
  subscriptions: Subscription[] = [];
  breadcrumbSub!: Subscription;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private breadcrumbService: BreadcrumbService,
    // eslint-disable-next-line no-unused-vars
    private store: Store
  ) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    const coursesSub = this.store
      .select(selectCourses)
      .subscribe((courses: Course[]) => {
        this.breadcrumbService.setCourses(courses);
      });
    this.subscriptions.push(coursesSub);
    const breadcrumbSub = this.breadcrumbService
      .getBreadcrumbs()
      .subscribe((breadcrumbsArr: BreadCrumb[]) => {
        this.breadcrumbs = breadcrumbsArr;
      });
    this.subscriptions.push(breadcrumbSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
