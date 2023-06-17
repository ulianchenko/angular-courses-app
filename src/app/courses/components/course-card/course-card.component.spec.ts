import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockedCoursesList } from 'src/app/core/constants/mockedConstants';
import { CourseCardComponent } from './course-card.component';

@Component({
  template: `<ul class="courses">
    <app-course-card
      [coursesListItem]="course"
      [cardIndex]="i"
      (cardToDelete)="handleDeleteCard($event)"
    ></app-course-card>
  </ul>`
})
class TestHostComponent {
  course = mockedCoursesList[0];
  cardIdToBeDelete: number | undefined;
  handleDeleteCard(id: number) {
    this.cardIdToBeDelete = id;
  }
}

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent]
    });
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the course card id to delete (as a class testing)', () => {
    const comp = new CourseCardComponent();
    const course = mockedCoursesList[0];
    comp.coursesListItem = course;

    comp.cardToDelete.subscribe((deletedCourse: number) =>
      expect(deletedCourse).toBe(course.id)
    );

    comp.deleteCard(course.id);
  });

  it('should display course description (stand alone testing)', () => {
    const expectedCourse = mockedCoursesList[0];
    component.coursesListItem = expectedCourse;
    fixture.detectChanges();

    const courseDescriptionDe = fixture.debugElement.query(
      By.css('.courses__card_main_description')
    );

    const courseDescriptionEl = courseDescriptionDe.nativeElement;
    const expectedPipedDescription = expectedCourse.description;
    expect(courseDescriptionEl.textContent).toContain(expectedPipedDescription);
  });

  it('should emit the course card id to delete (stand alone testing)', () => {
    const courseId = mockedCoursesList[0].id;
    spyOn(component.cardToDelete, 'emit');

    component.deleteCard(courseId);

    expect(component.cardToDelete.emit).toHaveBeenCalledWith(courseId);
  });

  it('should log to console "Card ${id} was edited"', () => {
    const courseId = mockedCoursesList[0].id;
    spyOn(console, 'log');

    component.editCard(courseId);

    expect(console.log).toHaveBeenCalledWith(`Card ${courseId} was edited`);
  });
});

describe('CourseCardComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent, TestHostComponent]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display course description (test host testing)', () => {
    const expectedPipedDescription = testHost.course.description;
    fixture.detectChanges();
    const courseDescriptionEl = fixture.nativeElement.querySelector(
      '.courses__card_main_description'
    );
    expect(courseDescriptionEl.textContent).toContain(expectedPipedDescription);
  });

  it('should emit the course card id to delete (test host testing)', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector(
      '[data-buttonFunction="delete"]'
    );
    button.click();
    tick();
    expect(testHost.cardIdToBeDelete).toBe(testHost.course.id);
  }));
});
