import { ChangeDetectorRef, Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getMockedCoursesList } from '../../../core/constants/mockedConstants';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { FilterByNamePipe } from '../../../shared/pipes/filter-by-name.pipe';
import { OrderByCreationDatePipe } from '../../../shared/pipes/order-by-creation-date.pipe';
import { BorderColorDirective } from '../../../shared/directives/border-color.directive';
import { CourseCardComponent } from './course-card.component';
import { IfAuthenticatedDirective } from '../../../shared/directives/if-authenticated.directive';

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
  course = getMockedCoursesList()[0];
  cardIdToBeDelete: number | undefined;
  handleDeleteCard(id: number) {
    this.cardIdToBeDelete = id;
  }
}

async function runOnPushChangeDetection(
  fixture: ComponentFixture<any>
): Promise<void> {
  const changeDetectorRef =
    fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
  changeDetectorRef.detectChanges();
  return fixture.whenStable();
}

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseCardComponent,
        BorderColorDirective,
        DurationPipe,
        FilterByNamePipe,
        OrderByCreationDatePipe,
        IfAuthenticatedDirective
      ],
      providers: [DurationPipe, FilterByNamePipe, OrderByCreationDatePipe]
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
    const course = getMockedCoursesList()[0];
    comp.coursesListItem = course;

    comp.cardToDelete.subscribe((deletedCourse: number) =>
      expect(deletedCourse).toBe(course.id)
    );

    comp.deleteCard(course.id);
  });

  it('should display course description (stand alone testing with helper function for onPush change detection strategy)', async () => {
    const expectedCourse = getMockedCoursesList()[0];
    component.coursesListItem = expectedCourse;
    await runOnPushChangeDetection(fixture);

    const courseDescriptionDe = fixture.debugElement.query(
      By.css('.courses__card_main_description')
    );

    const courseDescriptionEl = courseDescriptionDe.nativeElement;
    const expectedPipedDescription = expectedCourse.description;
    expect(courseDescriptionEl.textContent).toContain(expectedPipedDescription);
  });

  it('should emit the course card id to delete (stand alone testing)', () => {
    const courseId = getMockedCoursesList()[0].id;
    spyOn(component.cardToDelete, 'emit');

    component.deleteCard(courseId);

    expect(component.cardToDelete.emit).toHaveBeenCalledWith(courseId);
  });

  it('should log to console "Card ${id} was edited"', () => {
    const courseId = getMockedCoursesList()[0].id;
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
      declarations: [
        CourseCardComponent,
        TestHostComponent,
        FilterByNamePipe,
        DurationPipe,
        OrderByCreationDatePipe,
        BorderColorDirective,
        IfAuthenticatedDirective
      ],
      providers: [FilterByNamePipe, DurationPipe, OrderByCreationDatePipe]
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
      '[data-button-function="delete"]'
    );
    button.click();
    tick();
    expect(testHost.cardIdToBeDelete).toBe(testHost.course.id);
  }));
});
