import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the coursePage state domain
 */

const selectCoursePageDomain = state => state.coursePage || initialState;

/**
 * Other specific selectors
 */
const makeSelectSlots = () =>
  createSelector(
    selectCoursePageDomain,
    state => state.slots,
  );

/**
 * Default selector used by CoursePage
 */

const makeSelectCoursePage = () =>
  createSelector(
    selectCoursePageDomain,
    substate => substate,
  );

export default makeSelectCoursePage;
export { selectCoursePageDomain, makeSelectSlots };
