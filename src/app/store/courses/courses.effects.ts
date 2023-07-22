import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Course } from '../../courses/models/course.model';
import {
  addMoreCourses,
  createNewCourse,
  deleteCourse,
  filterCourses,
  getCourses,
  loadMoreCourses,
  setCourses,
  updateCourse
} from './courses.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { CoursesService } from '../../courses/services/courses.service';

@Injectable()
export class CoursesEffects {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private actions: Actions,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService,
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService
  ) {}

  getCoursesData$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getCourses),
      switchMap(() => {
        this.loadingService.setLoadingChange(true);
        return this.coursesService.fetchCourses().pipe(
          map((coursesData) => {
            this.loadingService.setLoadingChange(false);
            return setCourses({ courses: coursesData });
          }),
          catchError((error) => {
            console.error(error.message);
            this.loadingService.setLoadingChange(false);
            return [];
          })
        );
      })
    );
  });

  loadMoreCourses$ = createEffect(() => {
    return this.actions.pipe(
      ofType(loadMoreCourses),
      switchMap((action) => {
        const { start, count } = action;
        this.loadingService.setLoadingChange(true);
        return this.coursesService.fetchCourses(start, count).pipe(
          map((coursesData) => {
            this.loadingService.setLoadingChange(false);
            return addMoreCourses({ courses: coursesData });
          }),
          catchError((error) => {
            console.error(error.message);
            this.loadingService.setLoadingChange(false);
            return [];
          })
        );
      })
    );
  });

  removeCourse$ = createEffect(() => {
    return this.actions.pipe(
      ofType(deleteCourse),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        const { id } = action;
        return this.coursesService.removeCourse(id).pipe(
          switchMap((courseData) => {
            if (courseData) {
              return this.coursesService.fetchCourses().pipe(
                map((coursesData) => {
                  this.loadingService.setLoadingChange(false);
                  return setCourses({ courses: coursesData });
                }),
                catchError((error) => {
                  console.error(error.message);
                  this.loadingService.setLoadingChange(false);
                  return [];
                })
              );
            } else {
              this.loadingService.setLoadingChange(false);
              return [];
            }
          })
        );
      })
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions.pipe(
      ofType(createNewCourse),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        const { newCourse } = action;
        return this.coursesService.createCourse(newCourse).pipe(
          switchMap((courseData) => {
            if (courseData) {
              return this.coursesService.fetchCourses().pipe(
                map(() => {
                  this.loadingService.setLoadingChange(false);
                  return getCourses();
                }),
                catchError((error) => {
                  console.error(error.message);
                  this.loadingService.setLoadingChange(false);
                  return [];
                })
              );
            } else {
              this.loadingService.setLoadingChange(false);
              return [];
            }
          })
        );
      })
    );
  });

  updateCourse$ = createEffect(() => {
    return this.actions.pipe(
      ofType(updateCourse),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        const { newCourse } = action;
        return this.coursesService.updateCourse(newCourse).pipe(
          switchMap((courseData) => {
            if (courseData) {
              return this.coursesService.fetchCourses().pipe(
                map(() => {
                  this.loadingService.setLoadingChange(false);
                  return getCourses();
                }),
                catchError((error) => {
                  console.error(error.message);
                  this.loadingService.setLoadingChange(false);
                  return [];
                })
              );
            } else {
              this.loadingService.setLoadingChange(false);
              return [];
            }
          })
        );
      })
    );
  });

  filterCourses$ = createEffect(() => {
    return this.actions.pipe(
      ofType(filterCourses),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        const { searchString } = action;
        return this.coursesService.getCoursesBySearchString(searchString).pipe(
          switchMap((coursesData: Course[]) => {
            this.loadingService.setLoadingChange(false);
            return of(setCourses({ courses: coursesData }));
          }),
          catchError((error) => {
            this.loadingService.setLoadingChange(false);
            console.error(error.message);
            return [];
          })
        );
      })
    );
  });
}
