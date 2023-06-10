import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSearchComponent } from './courses-search.component';

describe('CourseSearchComponent', () => {
  let component: CoursesSearchComponent;
  let fixture: ComponentFixture<CoursesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesSearchComponent]
    });
    fixture = TestBed.createComponent(CoursesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
