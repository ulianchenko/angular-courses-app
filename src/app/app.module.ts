import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseSearchComponent } from './pages/courses-page/courses-search/course-search.component';
import { CoursesListComponent } from './pages/courses-page/courses-list/courses-list.component';
import { CourseItemComponent } from './pages/courses-page/course-item/course-item.component';
import { ButtonComponent } from './shared/button/button.component';

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
