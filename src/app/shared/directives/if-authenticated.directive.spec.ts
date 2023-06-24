import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IfAuthenticatedDirective } from './if-authenticated.directive';

@Component({
  template: `<div *appIfAuthenticated="!isAuth" data-test-div="testDiv"></div>
    <span *appIfAuthenticated="isAuth" data-test-span="testSpan"></span>
    <p data-set-paragraph="testParagraph"></p>`
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

  it('should have two elements with directive', () => {
    const elWithDirective = fixture.debugElement.queryAllNodes(
      By.directive(IfAuthenticatedDirective)
    );
    expect(elWithDirective.length).toBe(2);
  });
});
