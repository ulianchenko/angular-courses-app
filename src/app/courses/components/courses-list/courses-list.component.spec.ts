import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { CourseCardComponent } from '../course-card/course-card.component';
import { getMockedCoursesList } from '../../../core/constants/mockedConstants';
import { By } from '@angular/platform-browser';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, CourseCardComponent]
    });
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleDeleteCard', fakeAsync(() => {
    spyOn(component, 'handleDeleteCard');
    const button = fixture.debugElement.nativeElement.querySelector(
      '[data-button-function="delete"]'
    );
    button.click();
    tick();
    expect(component.handleDeleteCard).toHaveBeenCalled();
    expect(button.textContent).toBe(' Delete ');
  }));

  it('should log "ngOnInit hook works"', () => {
    spyOn(console, 'log');
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('ngOnInit hook works');
  });

  it('should courses cards number be equal mockedCoursesList length', () => {
    let coursesCards =
      fixture.debugElement.nativeElement.querySelectorAll('.courses__card');
    expect(coursesCards.length).toBe(getMockedCoursesList().length);
  });

  it('should bind course data to child component with @Input', () => {
    const courseCard = getMockedCoursesList()[0];
    component.courses = [courseCard];
    fixture.detectChanges();

    const courseCardComp = fixture.debugElement.query(
      By.directive(CourseCardComponent)
    ).componentInstance;

    expect(courseCardComp.coursesListItem).toEqual(courseCard);
  });
});
