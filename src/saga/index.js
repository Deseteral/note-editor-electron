import { call, put, takeEvery } from 'redux-saga/effects';
import {
  libraryPathChanged,
  LIBRARY_PATH_CHANGE_REQUEST,
} from '../actions/library-path';
import { openLibraryPathDialog } from '../services/electron-service';

function* libraryPathChange() {
  const filePaths = yield call(openLibraryPathDialog);
  yield put(libraryPathChanged(filePaths[0]));
}

function* saga() {
  yield takeEvery(LIBRARY_PATH_CHANGE_REQUEST, libraryPathChange);
}

export default saga;
