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
      .catch(err => console.error(err)); // TODO: Display helpfull message
  }

  onChange(value) {
    this.setState({ value });
    FileService.saveFile(
      this.props.file.path,
      this.state.value.toString('markdown'),
    );
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
