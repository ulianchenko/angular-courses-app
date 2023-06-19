import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './courses/pages/courses-page/courses-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { CoursesSearchComponent } from './courses/components/courses-search/courses-search.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { CourseCardComponent } from './courses/components/course-card/course-card.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        CoursesPageComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        LogoComponent,
        CoursesSearchComponent,
        CoursesListComponent,
        CourseCardComponent
      ]
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-courses-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-courses-app');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'angular-courses-app app is running!'
  //   );
  // });
});
