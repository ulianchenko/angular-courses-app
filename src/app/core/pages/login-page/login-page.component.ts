import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { Login } from '../../models/login.model';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  emailInputText: string = '';
  passwordInputText: string = '';
  subscriptions: Subscription[] = [];

  @Output() loginClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  onClickLogin(): void {
    const loginSub = this.authService
      .login(this.emailInputText, this.passwordInputText)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.loadingService.setLoadingChange(false);
          throw 'Login request was returned with an error:' + error.error;
        })
      )
      .subscribe((data: Login) => {
        this.authService.setAuthToken(data.token);
        this.loadingService.setLoadingChange(false);
        this.router.navigate([this.authService.redirectUrl]);
      });
    this.subscriptions.push(loginSub);
    this.emailInputText = '';
    this.passwordInputText = '';
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onInputEmail(event: Event) {
    this.emailInputText = (event.target as HTMLInputElement).value;
  }

  onInputPassword(event: Event) {
    this.passwordInputText = (event.target as HTMLInputElement).value;
  }
}
