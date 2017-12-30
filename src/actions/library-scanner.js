import { LIBRARY_SCANNER_START, LIBRARY_SCANNER_FINISHED } from '../actions/types';

function libraryScannerStart() {
  return {
    type: LIBRARY_SCANNER_START,
  };
}

function libraryScannerFinished(files) {
  return {
    type: LIBRARY_SCANNER_FINISHED,
    payload: files,
  };
}

export {
  libraryScannerStart,
  libraryScannerFinished,
};
