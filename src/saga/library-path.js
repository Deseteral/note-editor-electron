import { call, put } from 'redux-saga/effects';
import { ipcRenderer } from 'electron';
import { libraryPathLoaded } from '../actions/library-path';
import {
  openLibraryPathDialog,
  openMissingLibraryPathMessageBox,
} from '../services/electron-service';
import { LIBRARY_PATH_LOADED } from '../actions/types';

function* libraryPathChange() {
  try {
    const libraryPath = yield call(openLibraryPathDialog);
    yield put(libraryPathLoaded(libraryPath));
    ipcRenderer.send(LIBRARY_PATH_LOADED);
  } catch (e) {
    openMissingLibraryPathMessageBox();
  }
}

export { libraryPathChange }; // eslint-disable-line import/prefer-default-export
