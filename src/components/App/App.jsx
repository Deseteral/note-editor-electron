import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from '../Header/Header';
import LibraryFileList from '../../containers/LibraryFileList';

function App({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <LibraryFileList />
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
