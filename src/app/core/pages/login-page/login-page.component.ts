import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  emailInputText: string = '';
  passwordInputText: string = '';
  authSub!: Subscription;

  @Output() loginClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  onClickLogin() {
    this.authService.login(this.emailInputText, this.passwordInputText);
    this.authSub = this.authService.isAuthenticated().subscribe((auth) => {
      if (auth) {
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  onInputEmail(event: any) {
    this.emailInputText = event.target.value;
  }

  onInputPassword(event: any) {
    this.passwordInputText = event.target.value;
  }
}
