import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
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

  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) {}

  fetchCourses(start = 0, count = 4) {
    return this.http.get<Course[]>(
      `${urls.base}/courses?start=${start}&count=${count}`
    );
  }

  fetchCourse(id?: number) {
    return this.http.get<Course>(`${urls.base}/courses/${id}`);
  }

  removeCourse(id: number) {
    return this.http.delete<Course[]>(`${urls.base}/courses/${id}`).pipe(
      catchError((error) => {
        throw new Error(`An error occurred: ${error.message}`);
      })
    );
  }

  getCoursesBySearchString(searchString: string): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${urls.base}/courses?textFragment=${searchString}`)
      .pipe(
        catchError((error) => {
          throw new Error(`An error occurred: ${error.message}`);
        })
      );
  }

  createCourse(course: Course) {
    return this.http.post<Course>(`${urls.base}/courses/`, course).pipe(
      catchError((error) => {
        throw new Error(`An error occurred: ${error.message}`);
      })
    );
  }

  updateCourse(newCourse: Course) {
    return this.http
      .patch(`${urls.base}/courses/${newCourse.id}`, newCourse)
      .pipe(
        catchError((error) => {
          throw new Error(`An error occurred: ${error.message}`);
        })
      );
  }
}
