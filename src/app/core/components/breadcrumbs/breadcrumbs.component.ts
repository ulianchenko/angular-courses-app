import { Component } from '@angular/core';
import { BreadCrumb } from '../../models/breadcrumb.model';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  breadcrumbs?: BreadCrumb[];

  constructor(
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService
  ) {
    this.breadcrumbs = this.coursesService.breadcrumbs;
    this.coursesService.breadcrumbChange.subscribe(
      (breadcrumb: BreadCrumb[]) => {
        this.breadcrumbs = breadcrumb;
      }
    );
  }
}
