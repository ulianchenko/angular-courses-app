import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  isAuth: boolean = false;
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
  }

  handleLoginClick() {
    this.isAuth = true;
  }

  handleLogoutClick() {
    this.isAuth = false;
  }
}
