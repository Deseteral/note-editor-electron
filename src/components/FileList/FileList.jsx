import React from 'react';
import PropTypes from 'prop-types';
import NoDirectoryPlaceholder from '../NoDirectoryPlaceholder/NoDirectoryPlaceholder';

function FileList({ fileList, showSelectButton, selectLibraryPath }) {
  if (showSelectButton) {
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
  fileList: PropTypes.arrayOf(PropTypes.string),
  showSelectButton: PropTypes.bool,
  selectLibraryPath: PropTypes.func.isRequired,
};

FileList.defaultProps = {
  fileList: [],
  showSelectButton: false,
};

export default FileList;
