import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import FileService from '../../services/file-service';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: null,
      value: null,
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
    const { fileContent, value } = this.state;

    if (!fileContent) {
      return (<div>spinner</div>);
    }

    return (
      <RichTextEditor
        rootStyle={({ height: 'calc(100vh - 64px - 36px)' })}
        editorClassName="editor-root"
        value={value}
        onChange={v => this.onChange(v)}
      />
    );
  }
}

TextEditor.propTypes = {
  file: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextEditor.defaultProps = {
  file: null,
};

export default TextEditor;
