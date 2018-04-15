import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Header from '../Header/Header';
import LibraryFileList from '../../containers/LibraryFileList';

const Container = styled.div`
  height: 100%;
  padding-top: 64px;
`;

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#cfff95',
      main: '#9ccc65',
      dark: '#6b9b37',
      contrastText: '#000000',
    },
    primary: {
      light: '#76d275',
      main: '#43a047',
      dark: '#00701a',
      contrastText: '#ffffff',
    },
  },
});

function App({ store }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Container>
          <Header />
          <LibraryFileList />
        </Container>
      </MuiThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
