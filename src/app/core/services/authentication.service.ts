import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private fakeUser: UserEntity = {
    id: 1234,
    firstName: 'Jon',
    lastName: 'Snow'
  };
  private fakeToken: string = 'some token';
  isAuth: boolean = false;
  authChange: Subject<boolean> = new Subject<boolean>();

  redirectUrl: string | null = '/courses';

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {
    this.isAuth = !!localStorage.getItem('token');

    this.authChange.subscribe((auth: boolean) => {
      this.isAuth = auth;
    });
  }

  login(): void {
    localStorage.setItem('user', JSON.stringify(this.fakeUser));
    localStorage.setItem('token', this.fakeToken);
    this.authChange.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authChange.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): UserEntity {
    return JSON.parse(localStorage.getItem('user') ?? '{}');
  }
}
