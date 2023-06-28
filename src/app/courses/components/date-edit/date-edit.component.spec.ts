import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEditComponent } from './date-edit.component';

describe('DateEditComponent', () => {
  let component: DateEditComponent;
  let fixture: ComponentFixture<DateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateEditComponent]
    });
    fixture = TestBed.createComponent(DateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
