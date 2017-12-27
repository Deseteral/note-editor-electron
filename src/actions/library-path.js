const LIBRARY_PATH_LOAD_REQUEST = 'LIBRARY_PATH_LOAD_REQUEST';
const LIBRARY_PATH_LOADED = 'LIBRARY_PATH_LOADED';

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
  LIBRARY_PATH_LOAD_REQUEST,
  LIBRARY_PATH_LOADED,
};
