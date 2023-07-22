import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Course } from '../../courses/models/course.model';
import { BreadCrumb } from '../models/breadcrumb.model';
import { Store } from '@ngrx/store';
import { selectCourses } from '../../store/courses/courses.selectors';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService implements OnDestroy {
  breadcrumbs: BreadCrumb[] = [];
  subscriptions: Subscription[] = [];
  private breadcrumbChange: Subject<BreadCrumb[]> = new Subject<BreadCrumb[]>();

  // eslint-disable-next-line no-unused-vars
  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getBreadcrumbs(): Observable<BreadCrumb[]> {
    return this.breadcrumbChange.asObservable();
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
        const courseByIdSub = this.store
          .select(selectCourses)
          .subscribe((courses: Course[]) => {
            courseById = courses.find(
              (course: Course) => course.id === Number(breadcrumbItem)
            );
          });
        this.subscriptions.push(courseByIdSub);

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
