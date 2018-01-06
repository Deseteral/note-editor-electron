import React from 'react';
import PropTypes from 'prop-types';

function FileList({ fileList }) {
  return (
    <ul>
      {fileList.map(f => (<li>{f}</li>))}
    </ul>
  );
}

FileList.propTypes = {
  fileList: PropTypes.arrayOf(PropTypes.string),
};

FileList.defaultProps = {
  fileList: [],
};

export default FileList;
