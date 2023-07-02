import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  emailInputText: string = '';
  passwordInputText: string = '';
  @Output() loginClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  onClickLogin() {
    this.authService.login();
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  onInputEmail(event: any) {
    this.emailInputText = event.target.value;
  }

  onInputPassword(event: any) {
    this.passwordInputText = event.target.value;
  }
}
