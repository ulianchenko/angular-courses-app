import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { BreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { CoursesPageComponent } from './courses/pages/courses-page/courses-page.component';
import { CourseSearchComponent } from './courses/components/courses-search/course-search.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { CourseCardComponent } from './courses/components/course-card/course-card.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    CourseSearchComponent,
    CoursesListComponent,
    BreadcrumbsComponent,
    CourseCardComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
