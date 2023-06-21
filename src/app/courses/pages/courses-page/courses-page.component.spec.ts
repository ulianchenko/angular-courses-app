import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { LogoComponent } from '../../../core/components/header/logo/logo.component';
import { BreadcrumbsComponent } from '../../../core/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';
import { CoursesSearchComponent } from '../../components/courses-search/courses-search.component';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

import { getMockedCoursesList } from '../../../core/constants/mockedConstants';
import { FilterByNamePipe } from '../../../shared/pipes/filter-by-name.pipe';
import { OrderByCreationDatePipe } from '../../../shared/pipes/order-by-creation-date.pipe';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { BorderColorDirective } from '../../../shared/directives/border-color.directive';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        CoursesSearchComponent,
        CoursesListComponent,
        CourseCardComponent,
        FooterComponent,
        OrderByCreationDatePipe,
        DurationPipe,
        FilterByNamePipe,
        BorderColorDirective
      ],
      providers: [OrderByCreationDatePipe, DurationPipe, FilterByNamePipe]
    });
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log to console "Load more"', fakeAsync(() => {
    spyOn(console, 'log');

    let button = fixture.debugElement.nativeElement.querySelector(
      '.courses-page__load-more'
    );
    button.click();
    tick();
    expect(console.log).toHaveBeenCalledWith(`Load more`);
  }));

  it('should call onClickDeleteCard', fakeAsync(() => {
    spyOn(component, 'onClickDeleteCard');

    let button = fixture.debugElement.nativeElement.querySelector(
      '[data-button-function="delete"]'
    );
    button.click();
    tick();
    expect(component.onClickDeleteCard).toHaveBeenCalled();
  }));

  it('should log to console message about deleting the course card', fakeAsync(() => {
    spyOn(console, 'log');

    let button = fixture.debugElement.nativeElement.querySelector(
      '[data-button-function="delete"]'
    );
    button.click();
    tick();
    expect(console.log).toHaveBeenCalledWith(
      `Card ${getMockedCoursesList()[0].id} was deleted`
    );
  }));
});
