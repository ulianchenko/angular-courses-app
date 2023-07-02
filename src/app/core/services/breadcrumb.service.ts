import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Course } from '../../courses/models/course.model';
import { BreadCrumb } from '../models/breadcrumb.model';
import { CoursesService } from '../../courses/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs: BreadCrumb[] = [];
  breadcrumbChange: Subject<BreadCrumb[]> = new Subject<BreadCrumb[]>();
  breadcrumbSub!: Subscription;

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesService: CoursesService) {}

  setBreadcrumb(breadcrumb: string): void {
    let breadcrumbUrl: string = '';
    let breadcrumbLabel: string = '';
    let courseName: string = '';
    let courseById: Course | undefined;
    const breadcrumbsArr = breadcrumb
      .slice(1)
      .split('/')
      .map((breadcrumbItem) => {
        breadcrumbUrl += `/${breadcrumbItem}`;
        courseById = this.coursesService
          .getCoursesList()
          .find((course: Course) => course.id === Number(breadcrumbItem));
        courseName = courseById
          ? `Video course ${courseById.id}: ${courseById.name}`
          : '';

        breadcrumbLabel =
          courseName.length > 0
            ? courseName
            : `${breadcrumbItem[0].toUpperCase()}${breadcrumbItem.slice(1)}`;

        return {
          url: breadcrumbUrl,
          label: breadcrumbLabel
        };
      });
    this.breadcrumbChange.next(breadcrumbsArr);
    this.breadcrumbs = breadcrumbsArr;
  }
}
