import { CURRENT_FILE_SELECT } from './types';

function currentFileSelect(file) {
  return {
    type: CURRENT_FILE_SELECT,
    payload: file,
  };
}

export {
  currentFileSelect, // eslint-disable-line import/prefer-default-export
};
