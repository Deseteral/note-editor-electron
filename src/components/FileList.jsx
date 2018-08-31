import React, { Component } from 'react';
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
import NoDirectoryPlaceholder from './NoDirectoryPlaceholder';
import AppContainer from './AppContainer';
import NewNoteDialog from './NewNoteDialog';
import FileService from '../services/file-service';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PaperContainer = styled.div`
  width: 75%;
`;

class FileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteModalOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.libraryPath) {
      this.props.scanLibrary();
    }
  }

  createNewNote(noteName) {
    const { libraryPath, selectCurrentFile } = this.props;

    FileService
      .createFile(libraryPath, noteName)
      .then(file => selectCurrentFile(file))
      .catch(err => console.error(err));
  }

  render() {
    const {
      title,
      fileList,
      libraryPath,
      selectLibraryPath,
      selectCurrentFile,
    } = this.props;

    if (!libraryPath) {
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
                  onClick={() => this.setState({ newNoteModalOpen: true })}
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
        <NewNoteDialog
          open={this.state.newNoteModalOpen}
          handleClose={() => this.setState({ newNoteModalOpen: false })}
          handleSubmit={name => this.createNewNote(name)}
        />
      </AppContainer>
    );
  }
}

FileList.propTypes = {
  title: PropTypes.string.isRequired,
  fileList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLibraryPath: PropTypes.func.isRequired,
  selectCurrentFile: PropTypes.func.isRequired,
  libraryPath: PropTypes.string,
  scanLibrary: PropTypes.func.isRequired,
};

FileList.defaultProps = {
  libraryPath: null,
};

export default FileList;
