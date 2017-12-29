import { takeEvery } from 'redux-saga/effects';
import {
  LIBRARY_PATH_LOAD_REQUEST,
} from '../actions/types';
import { libraryPathChange } from './library-path';

function* saga() {
  yield takeEvery(LIBRARY_PATH_LOAD_REQUEST, libraryPathChange);
}

export default saga;
