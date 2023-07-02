import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CoursesService } from '../../courses/services/courses.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const coursesService = inject(CoursesService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    coursesService.setBreadcrumb(state.url);
    return true;
  }
  return router.parseUrl('/login');
};
