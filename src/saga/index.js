import { call, put, takeEvery } from 'redux-saga/effects';
import {
  libraryPathLoaded,
  LIBRARY_PATH_LOAD_REQUEST,
} from '../actions/library-path';
import { openLibraryPathDialog } from '../services/electron-service';

function* libraryPathChange() {
  const filePaths = yield call(openLibraryPathDialog);
  yield put(libraryPathLoaded(filePaths[0]));
}

function* saga() {
  yield takeEvery(LIBRARY_PATH_LOAD_REQUEST, libraryPathChange);
}

export default saga;
