import React from 'react';
import PropTypes from 'prop-types';
import NoDirectoryPlaceholder from '../NoDirectoryPlaceholder/NoDirectoryPlaceholder';

function FileList({ fileList, selectLibraryPath }) {
  if (fileList.length === 0) {
    return (
      <NoDirectoryPlaceholder onButtonClick={selectLibraryPath} />
    );
  }

  return (
    <ul>
      {fileList.map(f => (<li>{f}</li>))}
    </ul>
  );
}

FileList.propTypes = {
  fileList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectLibraryPath: PropTypes.func.isRequired,
};

export default FileList;
