import { connect } from 'react-redux';
import TextEditor from '../components/TextEditor/TextEditor';

function mapStateToProps(state) {
  return {
    file: state.currentFile,
  };
}

function mapDispatchToProps() {
  return {};
}

const CurrentFileEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextEditor);

export default CurrentFileEditor;
