import { call, put } from 'redux-saga/effects';
import { ipcRenderer } from 'electron';
import { libraryPathLoaded } from '../actions/library-path';
import { libraryScannerStart } from '../actions/library-scanner';
import { LIBRARY_PATH_LOADED } from '../actions/types';
import { openLibraryPathDialog } from '../services/electron-service';

function* libraryPathChange() {
  try {
    const libraryPath = yield call(openLibraryPathDialog);

    yield put(libraryPathLoaded(libraryPath));
    yield put(libraryScannerStart());
    yield call(ipcRenderer.send, LIBRARY_PATH_LOADED);
  } catch (e) {
    console.warn('No directory was selected');
  }
}

export { libraryPathChange }; // eslint-disable-line import/prefer-default-export
