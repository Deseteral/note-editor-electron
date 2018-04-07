import React from 'react';
import PropTypes from 'prop-types';

function NoDirectoryPlaceholder({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick()}>
      Wybierz katalog
    </button>
  );
}

NoDirectoryPlaceholder.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default NoDirectoryPlaceholder;
