import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';

export const authGuard: CanActivateFn = (route, state) => {
  const breadcrumbService = inject(BreadcrumbService);
  const router = inject(Router);

  if (localStorage.getItem('token')) {
    breadcrumbService.setBreadcrumb(state.url);
    return true;
  }
  return router.parseUrl('/login');
};
