import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoursesPageComponent } from './courses/pages/courses-page/courses-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { BreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component';

import { CoursesSearchComponent } from './courses/components/courses-search/courses-search.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { CourseCardComponent } from './courses/components/course-card/course-card.component';

import { BorderColorDirective } from './shared/directives/border-color.directive';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { OrderByCreationDatePipe } from './shared/pipes/order-by-creation-date.pipe';
import { FilterByNamePipe } from './shared/pipes/filter-by-name.pipe';

import { CoursesService } from './courses/services/courses.service';
import { AuthenticationService } from './core/services/authentication.service';
import { IfAuthenticatedDirective } from './shared/directives/if-authenticated.directive';
import { AddCoursePageComponent } from './courses/pages/add-course-page/add-course-page.component';
import { DateEditComponent } from './courses/components/date-edit/date-edit.component';
import { DurationEditComponent } from './courses/components/duration-edit/duration-edit.component';
import { AuthorsEditComponent } from './courses/components/authors-edit/authors-edit.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { CustomReuseStrategy } from './app-custom-route-reuse-strategy';
import { BreadcrumbService } from './core/services/breadcrumb.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    BreadcrumbsComponent,
    CourseCardComponent,
    BorderColorDirective,
    DurationPipe,
    OrderByCreationDatePipe,
    FilterByNamePipe,
    LoginPageComponent,
    IfAuthenticatedDirective,
    AddCoursePageComponent,
    DateEditComponent,
    DurationEditComponent,
    AuthorsEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    FilterByNamePipe,
    OrderByCreationDatePipe,
    DurationPipe,
    CoursesService,
    AuthenticationService,
    BreadcrumbService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
