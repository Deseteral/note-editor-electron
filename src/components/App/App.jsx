import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { libraryPathChangeRequest } from '../../actions/library-path';

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(libraryPathChangeRequest());
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <h2>Welcome to React!</h2>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
