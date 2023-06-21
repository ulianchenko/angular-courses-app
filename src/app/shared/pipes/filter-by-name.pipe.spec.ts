import { getMockedCoursesList } from 'src/app/core/constants/mockedConstants';
import { FilterByNamePipe } from './filter-by-name.pipe';

describe('FilterByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should show four courses with substring "elit" in the title', () => {
    const pipe = new FilterByNamePipe();
    const courses = pipe.transform(getMockedCoursesList(), 'elit');
    expect(courses.length).toBe(4);
  });
});
