import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth: boolean = false;
  private authChange: Subject<boolean> = new Subject<boolean>();
  user!: UserEntity;

  redirectUrl: string | null = urls.courses;

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router, private http: HttpClient) {
    this.isAuth = !!localStorage.getItem('token');
  }

  login(emailStr: string, passwordStr: string): Observable<Object> {
    return this.http.post(`${urls.base}${urls.auth}${urls.login}`, {
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

  getUserInfo(): Observable<Object> {
    return this.http.post(`${urls.base}${urls.auth}${urls.user}`, {
      token: localStorage.getItem('token')
    });
  }

  setUser(user: UserEntity): void {
    this.user = user;
  }
}
