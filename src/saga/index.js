import { call, put, takeEvery } from 'redux-saga/effects';
import {
  libraryPathLoaded,
  LIBRARY_PATH_LOAD_REQUEST,
} from '../actions/library-path';
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

function* saga() {
  yield takeEvery(LIBRARY_PATH_LOAD_REQUEST, libraryPathChange);
}

export default saga;
