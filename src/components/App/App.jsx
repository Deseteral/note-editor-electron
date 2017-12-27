import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

function App(props) {
  return (
    <Provider store={props.store}>
      <h2>Welcome to React!</h2>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
