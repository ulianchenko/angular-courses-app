import { UserEntity } from 'src/app/core/models/user.model';
import { Course } from '../models/course.model';

export function createCourse(
  isEdit: boolean,
  course: Course,
  user: UserEntity
): Course {
  return {
    id: isEdit ? course.id : Date.now(),
    name: course.name,
    date: isEdit ? course.date : new Date().toString(),
    length: course.length,
    authors: isEdit
      ? course.authors
      : [
          {
            id: Number(Date.now()) + 1,
            name: `${user.name.first} ${user.name.last}`,
            lastName: ''
          }
        ],
    isTopRated: isEdit ? course.isTopRated : true,
    description: course.description
  };
}
