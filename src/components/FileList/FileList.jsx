import React from 'react';
import PropTypes from 'prop-types';

function FileList({ fileList, selectLibraryPath }) {
  if (fileList.length === 0) {
    return (
      <button onClick={() => selectLibraryPath()}>
        Wybierz katalog
      </button>
    );
  }

  return (
    <ul>
      {fileList.map(f => (<li>{f}</li>))}
    </ul>
  );
}

FileList.propTypes = {
  fileList: PropTypes.arrayOf(PropTypes.string),
  selectLibraryPath: PropTypes.func.isRequired,
};

FileList.defaultProps = {
  fileList: [],
};

export default FileList;
