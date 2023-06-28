import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationEditComponent } from './duration-edit.component';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';

describe('DurationEditComponent', () => {
  let component: DurationEditComponent;
  let fixture: ComponentFixture<DurationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurationEditComponent, DurationPipe],
      providers: [DurationPipe]
    });
    fixture = TestBed.createComponent(DurationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
