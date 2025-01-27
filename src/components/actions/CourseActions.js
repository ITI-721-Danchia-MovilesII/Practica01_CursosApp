import { SELECT_COURSE, UNSELECT_COURSE } from './CourseActionTypes';

export const selectCourse = (course) => ({
  type: SELECT_COURSE,
  payload: course,
});

export const unselectCourse = (course) => ({
  type: UNSELECT_COURSE,
  payload: course,
});
