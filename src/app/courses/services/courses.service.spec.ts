import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { getMockedCoursesList } from '../../core/constants/mockedConstants';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoursesService] });
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should courses array length be 33', () => {
    expect(service.getCoursesList().length).toBe(33);
  });

  it('should courses first element id be 8693', () => {
    const firstCourse = service.getCoursesList()[0];
    expect(firstCourse.id).toBe(8693);
  });

  it('should log to console "Course reprehenderit est veniam elit was successfully created"', () => {
    spyOn(console, 'log');
    service.createCourse(getMockedCoursesList()[0]);
    expect(console.log).toHaveBeenCalled();
  });

  it('should log to console "Course id: 8693"', () => {
    spyOn(console, 'log');
    const courseId = getMockedCoursesList()[0].id;
    service.getCourse(courseId);
    expect(console.log).toHaveBeenCalledWith(`Course id: ${courseId}`);
  });

  it('should log to console "Course 8693 was successfully updated"', () => {
    spyOn(console, 'log');
    const course = getMockedCoursesList()[0];
    service.updateCourse(course.id);
    expect(console.log).toHaveBeenCalled();
  });

  it('should remove course', () => {
    spyOn(console, 'log');
    const course = getMockedCoursesList()[0];
    const filteredCourses = service.removeCourse(course.id);
    expect(filteredCourses.length).toBe(32);
  });
});
