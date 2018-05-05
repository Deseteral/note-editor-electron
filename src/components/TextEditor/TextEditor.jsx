import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RichTextEditor from 'react-rte';
import Button from 'material-ui/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from 'material-ui/Paper';
import FileService from '../../services/file-service';
import AppContainer from '../AppContainer/AppContainer';

const EditFABButton = styled(Button).attrs({
  variant: 'fab',
  color: 'secondary',
  children: (<EditIcon />),
})`&& {
  position: fixed;
  z-index: 10;
  right: 16px;
  bottom: 16px;
}`;

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: null,
      value: null,
      editMode: false,
    };
  }

  componentDidMount() {
    FileService
      .loadFile(this.props.file.path)
      .then(fileContent => this.loadFileFromContent(fileContent))
      .catch(err => console.error(err)); // TODO: Display helpful message
  }

  onChange(value) {
    this.setState({ value });
    const { file } = this.props;
    const markdownContent = this.state.value.toString('markdown');

    FileService.saveFile(file.path, markdownContent);
  }

  loadFileFromContent(content) {
    this.setState({
      fileContent: content,
      value: RichTextEditor.createValueFromString(content, 'markdown'),
    });
  }

  render() {
    const { file, changeView } = this.props;
    const { fileContent, value, editMode } = this.state;

    if (!fileContent) {
      return (<div>spinner</div>);
    }

    const rteStyle = {
      minHeight: editMode ? 'calc(100vh - 64px - 36px)' : 'auto',
      background: 'none',
      border: 'none',
    };

    const onBackClick = editMode
      ? () => this.setState({ editMode: false })
      : () => changeView('FILE_LIST');

    return (
      <AppContainer
        title={file.filename}
        onBackClick={onBackClick}
      >
        <Paper>
          {!editMode && (
            <EditFABButton
              onClick={() => this.setState({ editMode: true })}
            />
          )}
          <RichTextEditor
            rootStyle={rteStyle}
            editorClassName="editor-root"
            value={value}
            readOnly={!editMode}
            onChange={v => this.onChange(v)}
          />
        </Paper>
      </AppContainer>
    );
  }
}

TextEditor.propTypes = {
  file: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  changeView: PropTypes.func.isRequired,
};

TextEditor.defaultProps = {
  file: null,
};

export default TextEditor;
