import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  authUser,
  checkUserToken,
  login,
  logout,
  setUser
} from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { UserEntity } from '../../core/models/user.model';
import { of } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private actions: Actions,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router
  ) {}

  checkToken$ = createEffect(() => {
    return this.actions.pipe(
      ofType(checkUserToken),
      map(() => {
        const token = this.authService.getLocalstorageToken();
        const isAuthenticated = !!token;
        return authUser({ isAuth: isAuthenticated });
      })
    );
  });

  setUserInfo$ = createEffect(() => {
    return this.actions.pipe(
      ofType(checkUserToken),
      switchMap(() => {
        const token = this.authService.getLocalstorageToken();
        if (token) {
          return this.authService.getUserInfo(token).pipe(
            map((userData: UserEntity) => {
              const userInfo: UserEntity = {
                id: userData.id,
                name: {
                  first: userData.name.first,
                  last: userData.name.last
                },
                login: userData.login,
                token
              };
              return setUser({ user: userInfo });
            })
          );
        } else {
          return [];
        }
      })
    );
  });

  loginUser$ = createEffect(() => {
    let loginStr: string, passwordStr: string, tokenStr: string;
    return this.actions.pipe(
      ofType(login),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        loginStr = action.login;
        passwordStr = action.password;
        return this.authService.getToken(loginStr, passwordStr);
      }),
      switchMap((tokenResponse) => {
        tokenStr = tokenResponse ? tokenResponse.token : '';
        return this.authService.getUserInfo(tokenStr);
      }),
      switchMap((userData) => {
        const userInfo: UserEntity = {
          id: userData.id,
          name: {
            first: userData.name.first,
            last: userData.name.last
          },
          login: loginStr,
          token: tokenStr
        };
        localStorage.setItem('token', userInfo.token);
        const setUserAction = setUser({ user: userInfo });
        const authUserAction = authUser({ isAuth: true });
        this.loadingService.setLoadingChange(false);
        return of(setUserAction, authUserAction);
      })
    );
  });

  logoutUser$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(logout),
        switchMap(() => {
          localStorage.removeItem('token');
          return of(logout());
        })
      );
    },
    { dispatch: false }
  );
}
