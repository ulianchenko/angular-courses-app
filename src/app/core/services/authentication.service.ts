import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: UserEntity = { id: 1234, firstName: 'Jon', lastName: 'Snow' };
  private fakeToken: string = 'some token';
  isAuth: boolean = false;

  constructor() {}

  login() {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('token', this.fakeToken);
    this.isAuth = true;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isAuth = false;
  }

  isAuthenticated() {
    return this.isAuth;
  }

  getUserInfo() {
    return localStorage.getItem('user');
  }
}
