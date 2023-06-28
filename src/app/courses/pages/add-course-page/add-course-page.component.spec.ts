import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should emit the saveCourse', () => {
    spyOn(component.saveCourse, 'emit');

    component.onClickSave();

    expect(component.saveCourse.emit).toHaveBeenCalled();
  });

  it('should emit the cancelEdit', () => {
    spyOn(component.cancelEdit, 'emit');

    component.onClickCancel();

    expect(component.cancelEdit.emit).toHaveBeenCalled();
  });

  it('should call onInputTitle', () => {
    spyOn(component, 'onInputTitle');
    const input = fixture.debugElement.query(By.css('#course-edit-title'));
    input.nativeElement.value = 'Test course title';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();

    expect(component.onInputTitle).toHaveBeenCalled();
  });

  it('should change course title', () => {
    const input = fixture.debugElement.query(By.css('#course-edit-title'));
    input.nativeElement.value = 'Test course title';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();
    expect(component.title).toBe('Test course title');
  });

  it('should call onInputDescription', () => {
    spyOn(component, 'onInputDescription');
    const input = fixture.debugElement.query(
      By.css('#course-edit-description')
    );
    input.nativeElement.value = 'Test course description';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();

    expect(component.onInputDescription).toHaveBeenCalled();
  });

  it('should change course description', () => {
    const input = fixture.debugElement.query(
      By.css('#course-edit-description')
    );
    input.nativeElement.value = 'Test course description';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();
    expect(component.description).toBe('Test course description');
  });

  it('should log to console "Author was deleted"', () => {
    spyOn(console, 'log');
    component.handleDeleteAuthor();

    expect(console.log).toHaveBeenCalledWith('Author was deleted');
  });
});
