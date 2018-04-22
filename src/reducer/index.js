import { combineReducers } from 'redux';
import libraryPath from './library-path';
import library from './library';
import view from './view';
import currentFile from './current-file';

const reducers = combineReducers({
  libraryPath,
  library,
  view,
  currentFile,
});

export default reducers;
