import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  authUser,
  checkUserToken,
  login,
  logout,
  setUser
} from './auth.actions';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { UserEntity } from '../../core/models/user.model';
import { of } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { AuthenticationService } from '../../core/services/authentication.service';

@Injectable()
export class AuthEffects {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private actions: Actions,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService
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
            }),
            catchError((error) => {
              console.error(`An error occurred: ${error.message}`);
              return [];
            })
          );
        } else {
          return [];
        }
      })
    );
  });

  loginUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(login),
      switchMap((action) => {
        this.loadingService.setLoadingChange(true);
        const { login, password } = action;
        return this.authService.getToken(login, password).pipe(
          switchMap((tokenResponse) => {
            const token = tokenResponse.token;
            return this.authService.getUserInfo(token).pipe(
              concatMap((userData) => {
                const userInfo: UserEntity = {
                  id: userData.id,
                  name: {
                    first: userData.name.first,
                    last: userData.name.last
                  },
                  login,
                  token
                };
                localStorage.setItem('token', userInfo.token);
                const setUserAction = setUser({ user: userInfo });
                const authUserAction = authUser({ isAuth: true });
                this.loadingService.setLoadingChange(false);
                return of(setUserAction, authUserAction);
              }),
              catchError((error) => {
                this.loadingService.setLoadingChange(false);
                console.error(`An error occurred: ${error.message}`);
                return [];
              })
            );
          })
        );
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
