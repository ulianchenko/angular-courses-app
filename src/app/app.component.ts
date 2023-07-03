import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { Course } from './courses/models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-courses-app';
  courseToEdit?: Course;
  isEditCourse: boolean = false;
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  handleLogoutClick(): void {
    this.isEditCourse = false;
    this.authService.logout();
  }

  handleEditCard(course: Course): void {
    this.courseToEdit = course;
    this.isEditCourse = true;
  }
}
