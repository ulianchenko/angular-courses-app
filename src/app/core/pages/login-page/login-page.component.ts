import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/store/auth/auth.selectors';
import { login } from '../../../store/auth/auth.actions';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingService } from '../../services/loading.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  loginControl: FormControl;
  passwordControl: FormControl;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store
  ) {
    this.loginControl = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
  }

  ngOnInit(): void {
    const getAuthSub = this.store
      .select(selectIsAuthenticated)
      .subscribe((auth: boolean) => {
        if (auth) {
          this.router.navigate([this.authService.redirectUrl]);
        }
        this.loadingService.setLoadingChange(false);
      });
    this.subscriptions.push(getAuthSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickLogin(): void {
    if (this.loginControl.valid && this.passwordControl.valid) {
      this.store.dispatch(
        login({
          login: this.loginControl.value,
          password: this.passwordControl.value
        })
      );
    }
    this.loginControl.reset();
    this.passwordControl.reset();
  }
}
