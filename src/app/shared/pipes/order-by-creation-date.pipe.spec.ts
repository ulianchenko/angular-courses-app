import { OrderByCreationDatePipe } from './order-by-creation-date.pipe';
import { getMockedCoursesList } from '../../core/constants/mockedConstants';

describe('OrderByCreationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByCreationDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort courses with the last course with name "magna excepteur aute deserunt"', () => {
    const pipe = new OrderByCreationDatePipe();
    const allCourses = getMockedCoursesList();
    const pipedCourses = pipe.transform(allCourses);
    expect(pipedCourses.pop()?.name).toBe('magna excepteur aute deserunt');
  });
});
