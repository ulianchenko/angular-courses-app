import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, filter, switchMap, tap } from 'rxjs';
import { UserEntity } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth!: boolean;
  user!: UserEntity;
  subscriptions: Subscription[] = [];
  @Output() logoutClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    const getAuthChangeSub = this.authService
      .getAuthChange()
      .pipe(
        tap((auth) => (this.isAuth = auth)),
        filter((auth) => auth === true),
        switchMap(() => this.authService.getUserInfo())
      )
      .subscribe((user: UserEntity) => {
        this.user = user;
        this.authService.setUser(user);
      });
    this.subscriptions?.push(getAuthChangeSub);
    if (this.isAuth) {
      const getUserInfoSub = this.authService
        .getUserInfo()
        .subscribe((data: UserEntity) => {
          this.user = data;
          this.authService.setUser(data);
        });
      this.subscriptions?.push(getUserInfoSub);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  onClickLogOut() {
    this.authService.logout();
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
  }
}
