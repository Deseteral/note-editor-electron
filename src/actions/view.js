import { VIEW_CHANGE } from '../actions/types';

function viewChange(nextView) {
  return {
    type: VIEW_CHANGE,
    payload: nextView,
  };
}

export {
  viewChange, // eslint-disable-line import/prefer-default-export
};
