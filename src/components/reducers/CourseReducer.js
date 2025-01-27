import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/CourseActionTypes';

const INITIAL_STATE = {
  availableCourses: ['Fundamentos de Redes', 'Fundamentos de Programación', 'Fundamentos de Base de Datos', 'Fundamentos de Seguridad', 'Fundamentos de las Organizaciones'],
  selectedCourses: [],
};

const CourseReducer = (state = INITIAL_STATE, action) => {
  const { availableCourses, selectedCourses } = state;
  const course = action.payload;

  switch (action.type) {
    case SELECT_COURSE:
      return {
        availableCourses: availableCourses.filter((c) => c !== course),
        selectedCourses: [...selectedCourses, course],
      };

    case UNSELECT_COURSE:
      return {
        availableCourses: [...availableCourses, course],
        selectedCourses: selectedCourses.filter((c) => c !== course),
      };

    default:
      return state;
  }
};

export default CourseReducer;
