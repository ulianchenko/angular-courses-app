import { createReducer, on } from '@ngrx/store';
import { Course } from '../../courses/models/course.model';
import { addMoreCourses, setCourses } from './courses.actions';

export interface CoursesState {
  courses: Course[];
}

export const initialState: CoursesState = {
  courses: []
};

export const coursesReducer = createReducer(
  initialState,
  on(setCourses, (state, action): CoursesState => {
    return {
      ...state,
      courses: action.courses
    };
  }),
  on(addMoreCourses, (state, action): CoursesState => {
    return {
      ...state,
      courses: [...state.courses, ...action.courses]
    };
  })
);
