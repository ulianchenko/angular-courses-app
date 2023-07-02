import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  user?: UserEntity;
  @Output() logoutClicked = new EventEmitter();
  constructor(
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {
    this.isAuth = this.authService.isAuthenticated();
    this.authService.authChange.subscribe((auth) => {
      this.isAuth = auth;
      this.user = this.authService.getUserInfo();
    });
  }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();
  }

  onClickLogOut() {
    this.authService.logout();
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
  }
}
