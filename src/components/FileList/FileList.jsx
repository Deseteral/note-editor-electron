import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import NoDirectoryPlaceholder from '../NoDirectoryPlaceholder/NoDirectoryPlaceholder';
import AppContainer from '../AppContainer/AppContainer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PaperContainer = styled.div`
  width: 75%;
`;

function addNewFile() {

}

function FileList({
  title,
  fileList,
  selectLibraryPath,
  selectCurrentFile,
}) {
  if (fileList.length === 0) {
    return (
      <AppContainer>
        <NoDirectoryPlaceholder onButtonClick={selectLibraryPath} />
      </AppContainer>
    );
  }

  return (
    <AppContainer title={title}>
      <Container>
        <PaperContainer>
          <Paper>
            <List>
              <ListItem
                onClick={() => addNewFile()}
                button
              >
                <ListItemIcon><AddIcon /></ListItemIcon>
                <ListItemText primary="Dodaj nową notatkę" />
              </ListItem>
              {fileList.map(file => (
                <ListItem
                  key={file.id}
                  onClick={() => selectCurrentFile(file)}
                  button
                >
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  <ListItemText primary={file.filename} secondary={file.path} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </PaperContainer>
      </Container>
    </AppContainer>
  );
}

FileList.propTypes = {
  title: PropTypes.string.isRequired,
  fileList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLibraryPath: PropTypes.func.isRequired,
  selectCurrentFile: PropTypes.func.isRequired,
};

export default FileList;
