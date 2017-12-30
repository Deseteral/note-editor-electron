import { LIBRARY_SCANNER_FINISHED } from '../actions/types';

function library(state = [], action) {
  switch (action.type) {
    case LIBRARY_SCANNER_FINISHED:
      return action.payload;
    default:
      return state;
  }
}

export default library;
