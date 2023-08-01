import { Course } from '../models/course.model';

export function createCourse(
  isEdit: boolean,
  course: Course,
  courseFormValue: any
): Course {
  return {
    id: isEdit ? course.id : Date.now(),
    name: courseFormValue.title,
    date: isEdit ? courseFormValue.date : new Date().toString(),
    length: courseFormValue.duration,
    authors: courseFormValue.authors,
    isTopRated: isEdit ? course.isTopRated : true,
    description: courseFormValue.description
  };
}
