import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfAuthenticatedDirective } from './if-authenticated.directive';

@Component({
  template: `<div *appIfAuthenticated="!isAuth" data-test-div="testDiv">
      testDiv
    </div>
    <span *appIfAuthenticated="isAuth" data-test-span="testSpan">testSpan</span>
    <p data-test-paragraph="testParagraph">testParagraph</p>`
})
class TestHostComponent {
  isAuth: boolean = true;
}

describe('IfAuthenticatedDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [IfAuthenticatedDirective, TestHostComponent]
    }).createComponent(TestHostComponent);

    fixture.detectChanges();
  });

  it('should display only elements with truthy directive input', () => {
    const divElem = fixture.debugElement.nativeElement.querySelector(
      '[data-test-div="testDiv"]'
    );
    const spanElem = fixture.debugElement.nativeElement.querySelector(
      '[data-test-span="testSpan"]'
    );
    const pElem = fixture.debugElement.nativeElement.querySelector(
      '[data-test-paragraph="testParagraph"]'
    );
    expect(divElem).toBeFalsy();
    expect(spanElem).toBeTruthy();
    expect(pElem).toBeTruthy();
  });
});
