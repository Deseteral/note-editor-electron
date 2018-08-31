import { connect } from 'react-redux';
import TextEditor from '../components/TextEditor';
import { viewChange } from '../actions/view';

function mapStateToProps(state) {
  return {
    file: state.currentFile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeView: nextView => dispatch(viewChange(nextView)),
  };
}

const CurrentFileEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextEditor);

export default CurrentFileEditor;
