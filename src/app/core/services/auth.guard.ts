import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { urls } from '../environment';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const breadcrumbService = inject(BreadcrumbService);
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    breadcrumbService.setBreadcrumb(state.url);
    return true;
  }
  return router.parseUrl(`${urls.login}`);
};
