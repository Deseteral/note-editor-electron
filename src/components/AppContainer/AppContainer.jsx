import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

function AppContainer({ title, children, onBackClick }) {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          {onBackClick && (
            <IconButton color="inherit" onClick={onBackClick}>
              <ArrowBackIcon />
            </IconButton>
          )}
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
  onBackClick: PropTypes.func,
};

AppContainer.defaultProps = {
  title: 'Edytor notatek',
  onBackClick: null,
};

export default AppContainer;
