import { Component, OnInit } from '@angular/core';
import { UserEntity } from './core/models/user.model';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  isAuth: boolean = false;
  user?: UserEntity;
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
    this.authService.logout();
  }
}
