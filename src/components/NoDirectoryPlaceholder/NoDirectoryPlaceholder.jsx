import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceholderIcon = () => (
  <Icon style={({ fontSize: '150px', color: 'var(--color-divider)' })}>
    create_new_folder
  </Icon>
);

function NoDirectoryPlaceholder({ onButtonClick }) {
  return (
    <Container>
      <PlaceholderIcon />
      <Typography color="subheading" paragraph>
        Wygląda na to, że nie wybrano żadnego katalogu
      </Typography>
      <Button
        color="secondary"
        variant="flat"
        onClick={onButtonClick}
      >
        Wybierz katalog
      </Button>
    </Container>
  );
}

NoDirectoryPlaceholder.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default NoDirectoryPlaceholder;
