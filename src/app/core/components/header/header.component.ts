import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserEntity } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  user?: UserEntity;
  @Output() logoutClicked = new EventEmitter();
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    this.user = this.isAuth
      ? JSON.parse(`${this.authService.getUserInfo()}`)
      : {};
  }

  onClickLogOut() {
    this.authService.logout();
    this.isAuth = false;
    this.logoutClicked.emit();
  }
}
