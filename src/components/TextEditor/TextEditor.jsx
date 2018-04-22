import React from 'react';
import PropTypes from 'prop-types';

function TextEditor({ file }) {
  return (
    <div>{JSON.stringify(file)}</div>
  );
}

TextEditor.propTypes = {
  file: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextEditor.defaultProps = {
  file: null,
};

export default TextEditor;
