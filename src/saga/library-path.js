import { call, put } from 'redux-saga/effects';
import { libraryPathLoaded } from '../actions/library-path';
import {
  openLibraryPathDialog,
  openMissingLibraryPathMessageBox,
} from '../services/electron-service';

function* libraryPathChange() {
  try {
    const libraryPath = yield call(openLibraryPathDialog);
    yield put(libraryPathLoaded(libraryPath));
  } catch (e) {
    openMissingLibraryPathMessageBox();
  }
}

export { libraryPathChange }; // eslint-disable-line import/prefer-default-export
