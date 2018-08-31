import React from 'react';
import PropTypes from 'prop-types';
import LibraryFileList from '../containers/LibraryFileList';
import CurrentFileEditor from '../containers/CurrentFileEditor';

const VIEWS = {
  FILE_LIST: 'FILE_LIST',
  EDITOR: 'EDITOR',
};

function Router({ view }) {
  switch (view) {
    case VIEWS.FILE_LIST: return (<LibraryFileList title="Twoje notatki" />);
    case VIEWS.EDITOR: return (<CurrentFileEditor />);
    default: return null;
  }
}

Router.propTypes = {
  view: PropTypes.oneOf(Object.keys(VIEWS)),
};

Router.defaultProps = {
  view: null,
};

export default Router;
