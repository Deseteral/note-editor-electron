import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Header from '../Header/Header';
import LibraryFileList from '../../containers/LibraryFileList';

const Container = styled.div`
  height: 100%;
  padding-top: 64px;
  background-color: #FAFAFA;
`;

function App({ store }) {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <LibraryFileList />
      </Container>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
