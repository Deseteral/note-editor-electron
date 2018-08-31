import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import ViewRouter from '../containers/ViewRouter';

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#CFFF95',
      main: '#9CCC65',
      dark: '#6B9B37',
      contrastText: '#FFFFFF',
    },
    primary: {
      light: '#76D275',
      main: '#43A047',
      dark: '#00701A',
      contrastText: '#FFFFFF',
    },
  },
});

function App({ store }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ViewRouter />
      </MuiThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
