import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should call onClickSearch', () => {
    spyOn(component, 'onClickSearch');
    const button = fixture.debugElement.nativeElement.querySelector(
      '[data-buttonFunction="search"]'
    );
    button.click();
    expect(component.onClickSearch).toHaveBeenCalled();
  });

  it('should log to console input value', () => {
    spyOn(console, 'log');
    const input = fixture.debugElement.query(
      By.css('[data-inputFunction="search"]')
    );

    input.nativeElement.value = 'trigger input event';
    input.triggerEventHandler('input', { target: input.nativeElement });
    const button = fixture.debugElement.nativeElement.querySelector(
      '[data-buttonFunction="search"]'
    );
    button.click();
    expect(console.log).toHaveBeenCalledWith('trigger input event');
  });

  it('should call onInput', () => {
    spyOn(component, 'onInput');
    const input = fixture.debugElement.query(
      By.css('[data-inputFunction="search"]')
    );
    input.nativeElement.value = 'trigger input event';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();
    expect(component.onInput).toHaveBeenCalled();
  });

  it('should call onFocusInput', () => {
    spyOn(component, 'onFocusInput');
    const input = fixture.debugElement.query(
      By.css('[data-inputFunction="search"]')
    );
    input.nativeElement.value = 'trigger input event';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();
    expect(component.onFocusInput).toHaveBeenCalled();
  });

  it('should call onBlurInput', () => {
    spyOn(component, 'onBlurInput');
    const input = fixture.debugElement.query(
      By.css('[data-inputFunction="search"]')
    );
    input.nativeElement.value = 'trigger input event';
    input.triggerEventHandler('input', { target: input.nativeElement });
    input.triggerEventHandler('blur', { target: input.nativeElement });
    expect(component.onBlurInput).toHaveBeenCalled();
  });

  it('should change showIcon state to true ', () => {
    component.onBlurInput();
    expect(component.showIcon).toBeTruthy();
  });
  it('should change showIcon state to false ', () => {
    component.onFocusInput();
    expect(component.showIcon).toBeFalsy();
  });
});
