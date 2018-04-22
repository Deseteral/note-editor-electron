import { CURRENT_FILE_SELECT } from '../actions/types';

function currentFile(state = null, action) {
  switch (action.type) {
    case CURRENT_FILE_SELECT:
      return action.payload;
    default:
      return state;
  }
}

export default currentFile;
