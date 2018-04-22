import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Header from '../Header/Header';
import ViewRouter from '../../containers/ViewRouter';

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#cfff95',
      main: '#9ccc65',
      dark: '#6b9b37',
      contrastText: '#ffffff',
    },
    primary: {
      light: '#76d275',
      main: '#43a047',
      dark: '#00701a',
      contrastText: '#ffffff',
    },
  },
});

const Container = styled.div`
  height: 100%;
  padding-top: 64px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 16px;
`;

function App({ store }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Container>
          <Header />
          <AppContainer>
            <ViewRouter />
          </AppContainer>
        </Container>
      </MuiThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
