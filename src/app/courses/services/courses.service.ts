import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { setError } from 'src/app/store/auth/auth.actions';
import { urls } from '../../core/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  emptyCourse: Course = {
    id: 0,
    name: '',
    description: '',
    isTopRated: false,
    date: '',
    authors: [],
    length: 0
  };

  coursesLoadStep: number = 4;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService
  ) {}

  fetchCourses(start = 0, count = 4) {
    return this.http
      .get<Course[]>(`${urls.base}/courses?start=${start}&count=${count}`)
      .pipe(
        catchError((error) => {
          this.router.navigate(['/error']);
          this.store.dispatch(setError({ errorStr: error.message }));
          this.loadingService.setLoadingChange(false);
          return [];
        })
      );
  }

  fetchCourse(id?: number) {
    return this.http.get<Course>(`${urls.base}/courses/${id}`).pipe(
      catchError((error) => {
        this.router.navigate(['/error']);
        this.store.dispatch(setError({ errorStr: error.message }));
        this.loadingService.setLoadingChange(false);
        return [];
      })
    );
  }

  removeCourse(id: number) {
    return this.http.delete<Course[]>(`${urls.base}/courses/${id}`).pipe(
      catchError((error) => {
        this.router.navigate(['/error']);
        this.store.dispatch(setError({ errorStr: error.message }));
        this.loadingService.setLoadingChange(false);
        return [];
      })
    );
  }

  getCoursesBySearchString(searchString: string): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${urls.base}/courses?textFragment=${searchString}`)
      .pipe(
        catchError((error) => {
          this.router.navigate(['/error']);
          this.store.dispatch(setError({ errorStr: error.message }));
          this.loadingService.setLoadingChange(false);
          return [];
        })
      );
  }

  createCourse(course: Course) {
    return this.http.post<Course>(`${urls.base}/courses/`, course).pipe(
      catchError((error) => {
        this.router.navigate(['/error']);
        this.store.dispatch(setError({ errorStr: error.message }));
        this.loadingService.setLoadingChange(false);
        return [];
      })
    );
  }

  updateCourse(newCourse: Course) {
    return this.http
      .patch(`${urls.base}/courses/${newCourse.id}`, newCourse)
      .pipe(
        catchError((error) => {
          this.router.navigate(['/error']);
          this.store.dispatch(setError({ errorStr: error.message }));
          this.loadingService.setLoadingChange(false);
          return [];
        })
      );
  }
}
