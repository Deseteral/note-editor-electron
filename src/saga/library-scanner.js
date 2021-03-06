import { call, put, select } from 'redux-saga/effects';
import libraryScanner from '../services/library-scanner';
import { libraryScannerFinished } from '../actions/library-scanner';

function* libraryScannerStart() {
  try {
    const libraryPath = yield select(state => state.libraryPath);
    const files = yield call(libraryScanner, libraryPath);
    yield put(libraryScannerFinished(files));
  } catch (e) {
    console.error(e);
  }
}

export { libraryScannerStart }; // eslint-disable-line import/prefer-default-export
