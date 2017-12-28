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
  const filePaths = yield call(openLibraryPathDialog);

  if (!filePaths || !filePaths[0]) {
    openMissingLibraryPathMessageBox();
  }

  yield put(libraryPathLoaded(filePaths[0]));
}

function* saga() {
  yield takeEvery(LIBRARY_PATH_LOAD_REQUEST, libraryPathChange);
}

export default saga;
