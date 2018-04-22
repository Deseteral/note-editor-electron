import { connect } from 'react-redux';
import FileList from '../components/FileList/FileList';
import { libraryPathLoadRequest } from '../actions/library-path';
import { currentFileSelect } from '../actions/current-file';
import { viewChange } from '../actions/view';

function mapStateToProps(state, ownProps) {
  return {
    title: ownProps.title,
    fileList: state.library,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLibraryPath: () => dispatch(libraryPathLoadRequest()),
    selectCurrentFile: ((file) => {
      dispatch(currentFileSelect(file));
      dispatch(viewChange('EDITOR'));
    }),
  };
}

const LibraryFileList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList);

export default LibraryFileList;
