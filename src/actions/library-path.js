import {
  LIBRARY_PATH_LOAD_REQUEST,
  LIBRARY_PATH_LOADED,
} from './types';

function libraryPathLoadRequest() {
  return {
    type: LIBRARY_PATH_LOAD_REQUEST,
  };
}

function libraryPathLoaded(newPath) {
  return {
    type: LIBRARY_PATH_LOADED,
    payload: newPath,
  };
}

export {
  libraryPathLoadRequest,
  libraryPathLoaded,
};
