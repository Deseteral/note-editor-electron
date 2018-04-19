import { VIEW_CHANGE } from '../actions/types';

function view(state = null, action) {
  switch (action.type) {
    case VIEW_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export default view;
