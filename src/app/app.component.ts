import { Component, OnInit } from '@angular/core';
import { UserEntity } from './core/models/user.model';
import { AuthenticationService } from './core/services/authentication.service';
import { Course } from './courses/models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  isAuth: boolean = false;
  user?: UserEntity;
  courseToEdit?: Course;
  isEditCourse: boolean = false;
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  handleLoginClick(): void {
    this.isAuth = true;
    this.authService.login();
    this.user = this.authService.getUserInfo();
  }

  handleLogoutClick(): void {
    this.isAuth = false;
    this.isEditCourse = false;
    this.authService.logout();
  }

  handleSaveCourse(): void {
    console.log('Course was saved');
    this.isEditCourse = false;
  }

  handleCancelEdit(): void {
    console.log('Course editing was canceled');
    this.isEditCourse = false;
  }

  handleEditCard(course: Course): void {
    this.courseToEdit = course;
    this.isEditCourse = true;
  }
}
