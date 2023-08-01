import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../courses/models/course.model';
import { BreadCrumb } from '../models/breadcrumb.model';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
// export class BreadcrumbService implements OnDestroy {
export class BreadcrumbService {
  breadcrumbs: BreadCrumb[] = [];
  courses: Course[] = [];
  // subscriptions: Subscription[] = [];
  private breadcrumbChange: Subject<BreadCrumb[]> = new Subject<BreadCrumb[]>();

  // eslint-disable-next-line no-unused-vars
  constructor(private store: Store) {}

  getBreadcrumbs(): Observable<BreadCrumb[]> {
    return this.breadcrumbChange.asObservable();
  }

  setCourses(courses: Course[]): void {
    this.courses = courses;
  }

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
        courseById = this.courses.find(
          (course: Course) => course.id === Number(breadcrumbItem)
        );

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
