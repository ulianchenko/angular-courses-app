import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AddCoursePageComponent } from './courses/pages/add-course-page/add-course-page.component';
import { CoursesPageComponent } from './courses/pages/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/new',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
