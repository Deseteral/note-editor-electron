import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { libraryPathLoadRequest } from '../../actions/library-path';
import LibraryFileList from '../../containers/LibraryFileList';

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(libraryPathLoadRequest());
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <h2>note-editor-electron</h2>
          <LibraryFileList />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
