import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../environment';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth: boolean = false;
  private authChange: Subject<boolean> = new Subject<boolean>();
  user!: UserEntity;

  redirectUrl: string | null = '/courses';

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router, private http: HttpClient) {
    this.isAuth = !!localStorage.getItem('token');
  }

  login(emailStr: string, passwordStr: string): Observable<Login> {
    return this.http.post<Login>(`${urls.base}/auth/login`, {
      login: emailStr,
      password: passwordStr
    });
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
    this.isAuth = true;
    this.authChange.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuth = false;
    this.authChange.next(false);
  }

  getAuthChange(): Observable<boolean> {
    return this.authChange.asObservable();
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${urls.base}/auth/userinfo`, {
      token: localStorage.getItem('token')
    });
  }

  setUser(user: UserEntity): void {
    this.user = user;
  }
}
