import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setError } from 'src/app/store/auth/auth.actions';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string | null = '/courses';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService
  ) {}

  getLocalstorageToken() {
    return localStorage.getItem('token');
  }

  getToken(login: string, password: string) {
    return this.http
      .post<{ token: string }>('http://localhost:3004/auth/login', {
        login,
        password
      })
      .pipe(
        catchError((error) => {
          this.router.navigate(['/error']);
          this.store.dispatch(setError({ errorStr: error.message }));
          this.loadingService.setLoadingChange(false);
          return [];
        })
      );
  }

  getUserInfo(token: string) {
    return this.http
      .post<UserEntity>('http://localhost:3004/auth/userinfo', {
        token
      })
      .pipe(
        catchError((error) => {
          this.router.navigate(['/error']);
          this.store.dispatch(setError({ errorStr: error.message }));
          this.loadingService.setLoadingChange(false);
          return [];
        })
      );
  }
}
