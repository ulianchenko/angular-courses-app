import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, map } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const breadcrumbService = inject(BreadcrumbService);
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.isAuthenticatedObserv().pipe(
    map((auth: boolean) => {
      if (auth) {
        breadcrumbService.setBreadcrumb(state.url);
        return true;
      }
      return router.parseUrl('/login');
    })
  );
};
