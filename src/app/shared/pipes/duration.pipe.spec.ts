import { Component } from '@angular/core';
import { DurationPipe } from './duration.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<div>
    {{ 333 | duration }}
  </div>`
})
class TestHostComponent {}

describe('DurationPipe', () => {
  // eslint-disable-next-line no-unused-vars
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DurationPipe],
      providers: [DurationPipe]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should show the "3h 33min"', () => {
    const pipe = new DurationPipe();
    const duration = pipe.transform(213);
    expect(duration).toBe('3h 33min');
  });

  it('should show the "5h 33min"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('div');
    fixture.detectChanges();
    expect(div.textContent).toBe(' 5h 33min ');
  });
});
