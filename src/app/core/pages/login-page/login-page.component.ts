import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  emailInputText: string = '';
  passwordInputText: string = '';
  isAuth: boolean = false;
  @Output() loginClicked = new EventEmitter();
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  onClickLogin() {
    this.authService.login();
    this.isAuth = true;
    this.loginClicked.emit();
  }

  onInputEmail(event: any) {
    this.emailInputText = event.target.value;
  }

  onInputPassword(event: any) {
    this.passwordInputText = event.target.value;
  }
}
