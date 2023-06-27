import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { DateEditComponent } from '../../components/date-edit/date-edit.component';
import { DurationEditComponent } from '../../components/duration-edit/duration-edit.component';

import { AddCoursePageComponent } from './add-course-page.component';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCoursePageComponent,
        DateEditComponent,
        DurationEditComponent,
        DurationPipe
      ],
      providers: [DurationPipe]
    });
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
