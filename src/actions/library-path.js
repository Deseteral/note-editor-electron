const LIBRARY_PATH_CHANGE_REQUEST = 'LIBRARY_PATH_CHANGE_REQUEST';
const LIBRARY_PATH_CHANGED = 'LIBRARY_PATH_CHANGED';

function libraryPathChangeRequest() {
  return {
    type: LIBRARY_PATH_CHANGE_REQUEST,
  };
}

function libraryPathChanged(newPath) {
  return {
    type: LIBRARY_PATH_CHANGED,
    payload: newPath,
  };
}

export {
  libraryPathChangeRequest,
  libraryPathChanged,
  LIBRARY_PATH_CHANGE_REQUEST,
  LIBRARY_PATH_CHANGED,
};
