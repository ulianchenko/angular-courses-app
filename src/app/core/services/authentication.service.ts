import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl = 'http://localhost:3004/auth/login';
  private userUrl = 'http://localhost:3004/auth/userinfo';
  user!: UserEntity;
  isAuth: boolean = false;
  private authChange: Subject<boolean> = new Subject<boolean>();

  redirectUrl: string | null = '/courses';

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router, private http: HttpClient) {
    this.isAuth = !!localStorage.getItem('token');
  }

  login(emailStr: string, passwordStr: string): void {
    this.http
      .post(this.authUrl, {
        login: emailStr,
        password: passwordStr
      })
      .subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.authChange.next(true);
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authChange.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authChange.asObservable();
  }

  getUserInfo(): Observable<Object> {
    return this.http.post(this.userUrl, {
      token: localStorage.getItem('token')
    });
  }

  setUser(user: UserEntity): void {
    this.user = user;
  }
}
