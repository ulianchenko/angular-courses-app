import { NgModule, isDevMode } from '@angular/core';
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
import { AuthorsService } from './courses/services/authors.service';
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
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { LoadingComponent } from './core/components/loading/loading.component';
import { LoadingService } from './core/services/loading.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { coursesReducer } from './store/courses/courses.reducer';
import { CoursesEffects } from './store/courses/courses.effects';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
    PageNotFoundComponent,
    LoadingComponent,
    ErrorPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      auth: authReducer,
      courses: coursesReducer
    }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    FilterByNamePipe,
    OrderByCreationDatePipe,
    DurationPipe,
    CoursesService,
    AuthorsService,
    AuthenticationService,
    BreadcrumbService,
    LoadingService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
