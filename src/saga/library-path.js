import { call, put } from 'redux-saga/effects';
import { libraryPathLoaded } from '../actions/library-path';
import { libraryScannerStart } from '../actions/library-scanner';
import { openLibraryPathDialog } from '../services/electron-service';

function* libraryPathChange() {
  try {
    const libraryPath = yield call(openLibraryPathDialog);

    yield put(libraryPathLoaded(libraryPath));
    yield put(libraryScannerStart());
  } catch (e) {
    console.warn('No directory was selected');
  }
}

export { libraryPathChange }; // eslint-disable-line import/prefer-default-export
