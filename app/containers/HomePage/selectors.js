const { selectFirebase } = require('containers/App/selectors');
const { createSelector } = require('reselect');

const makeSelectCourses = () =>
  createSelector(
    selectFirebase,
    substate => substate.ordered.courses,
  );

const makeSelectNotifs = () =>
  createSelector(
    selectFirebase,
    substate => substate.ordered.notifyHosted,
  );

export { makeSelectCourses, makeSelectNotifs };
