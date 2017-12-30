import { combineReducers } from 'redux';
import libraryPath from './library-path';
import library from './library';

const reducers = combineReducers({
  libraryPath,
  library,
});

export default reducers;
