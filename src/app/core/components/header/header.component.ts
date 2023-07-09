import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, filter, switchMap, tap } from 'rxjs';
import { urls } from '../../environment';
import { UserEntity } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth!: boolean;
  user?: UserEntity;
  subscriptions?: Subscription[];
  authSub!: Subscription;
  userSub!: Subscription;
  @Output() logoutClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    this.authSub = this.authService
      .getAuthChange()
      .pipe(
        tap((auth) => (this.isAuth = auth)),
        filter((auth) => auth === true),
        switchMap(() => this.authService.getUserInfo())
      )
      .subscribe((user: any) => {
        this.user = user;
        this.authService.setUser(user);
      });
    if (this.isAuth) {
      this.userSub = this.authService.getUserInfo().subscribe((data: any) => {
        this.user = data;
        this.authService.setUser(data);
      });
      this.subscriptions?.push(this.userSub);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe);
  }

  onClickLogOut() {
    this.authService.logout();
    if (!this.isAuth) {
      this.router.navigate([urls.login]);
    }
  }
}
