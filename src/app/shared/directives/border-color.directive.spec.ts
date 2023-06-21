import { Component, ElementRef } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { BorderColorDirective } from './border-color.directive';
import { getMockedCoursesList } from '../../core/constants/mockedConstants';

@Component({
  template: `<div [appBorderColor]="course.creationDate">Some test text</div>`
})
class TestHostComponent {
  course = getMockedCoursesList().find((course) => course.id === 4980);
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
    expect(directive).toBeTruthy();
  });

  it('should show blue border shadow', fakeAsync(() => {
    const div = fixture.debugElement.nativeElement.querySelector('div');
    fixture.detectChanges();
    tick(100);
    expect(div.style.boxShadow).toBe(
      'rgba(26, 133, 163, 0.9) 0px 0px 10px 3px'
    );
  }));
});
