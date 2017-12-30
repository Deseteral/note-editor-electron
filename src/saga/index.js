import { takeEvery } from 'redux-saga/effects';
import { LIBRARY_PATH_LOAD_REQUEST, LIBRARY_SCANNER_START } from '../actions/types';
import { libraryPathChange } from './library-path';
import { libraryScannerStart } from './library-scanner';

function* saga() {
  yield takeEvery(LIBRARY_PATH_LOAD_REQUEST, libraryPathChange);
  yield takeEvery(LIBRARY_SCANNER_START, libraryScannerStart);
}

export default saga;
