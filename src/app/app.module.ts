import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { BreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { CoursesPageComponent } from './courses/pages/courses-page/courses-page.component';
import { CourseSearchComponent } from './courses/components/courses-search/course-search.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { CourseItemComponent } from './courses/components/course-item/course-item.component';
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
    CourseItemComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
