import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Container = styled.div`
  height: 100%;
  padding-top: 64px;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 16px;
`;

function AppContainer({ title, children }) {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <ViewContainer>
        {children}
      </ViewContainer>
    </Container>
  );
}

AppContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AppContainer.defaultProps = {
  title: 'Edytor notatek',
};

export default AppContainer;
