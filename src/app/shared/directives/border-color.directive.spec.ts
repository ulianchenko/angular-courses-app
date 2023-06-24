import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderColorDirective } from './border-color.directive';
import { getMockedCoursesList } from '../../core/constants/mockedConstants';

@Component({
  template: `<div [appBorderColor]="course?.creationDate">Some test text</div>`
})
class TestHostComponent {
  course = getMockedCoursesList()[0];
}
describe('BorderColorDirective', () => {
  // eslint-disable-next-line no-unused-vars
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, BorderColorDirective]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const el = new ElementRef('div');
    const directive = new BorderColorDirective(el);
    fixture.detectChanges();
    expect(directive).toBeTruthy();
  });

  it('should show blue border shadow', () => {
    const div = fixture.debugElement.nativeElement.querySelector('div');
    fixture.detectChanges();
    expect(div.style.boxShadow).toBe('rgba(0, 0, 0, 0.4) 0px 0px 10px 3px');
  });
});
