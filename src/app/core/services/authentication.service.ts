import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string | null = '/courses';

  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) {}

  getLocalstorageToken() {
    return localStorage.getItem('token');
  }

  getToken(login: string, password: string) {
    return this.http.post<{ token: string }>(
      'http://localhost:3004/auth/login',
      {
        login,
        password
      }
    );
  }

  getUserInfo(token: string) {
    return this.http.post<UserEntity>('http://localhost:3004/auth/userinfo', {
      token
    });
  }
}
