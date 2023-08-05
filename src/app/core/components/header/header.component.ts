import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { logout } from '../../../store/auth/auth.actions';
import {
  selectIsAuthenticated,
  selectUser
} from 'src/app/store/auth/auth.selectors';
import { UserEntity } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth!: boolean;
  user!: UserEntity | null;
  subscriptions: Subscription[] = [];

  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.addLangs(['en', 'ua']);
    this.translate.setDefaultLang('en');

    const getAuthSub = this.store
      .select(selectIsAuthenticated)
      .subscribe((auth: boolean) => {
        this.isAuth = auth;
      });
    this.subscriptions.push(getAuthSub);

    const getUserInfoSub = this.store
      .select(selectUser)
      .subscribe((user: UserEntity | null) => {
        this.user = user;
      });
    this.subscriptions.push(getUserInfoSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickLogOut(): void {
    this.store.dispatch(logout());
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
