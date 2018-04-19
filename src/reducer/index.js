import { combineReducers } from 'redux';
import libraryPath from './library-path';
import library from './library';
import view from './view';

const reducers = combineReducers({
  libraryPath,
  library,
  view,
});

export default reducers;
