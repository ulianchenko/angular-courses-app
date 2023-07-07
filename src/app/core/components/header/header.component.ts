import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
    this.isAuth = this.authService.isAuth;
    this.authSub = this.authService.isAuthenticated().subscribe((auth) => {
      this.isAuth = auth;
      if (auth) {
        this.userSub = this.authService.getUserInfo().subscribe((data: any) => {
          this.user = data;
          if (this.user) {
            this.authService.setUser(this.user);
          }
        });
      }
    });
    if (this.isAuth) {
      this.userSub = this.authService.getUserInfo().subscribe((data: any) => {
        this.user = data;
        this.authService.setUser(data);
      });
    }
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.userSub.unsubscribe();
  }

  onClickLogOut() {
    this.authService.logout();
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
  }
}
