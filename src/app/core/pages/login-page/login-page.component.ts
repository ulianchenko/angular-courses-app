import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  emailInputText: string = '';
  passwordInputText: string = '';
  @Output() loginClicked = new EventEmitter();

  onClickLogin() {
    this.loginClicked.emit();
  }

  onInputEmail(event: any) {
    this.emailInputText = event.target.value;
  }

  onInputPassword(event: any) {
    this.passwordInputText = event.target.value;
  }
}
