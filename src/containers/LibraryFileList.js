import { connect } from 'react-redux';
import FileList from '../components/FileList/FileList';
import { libraryPathLoadRequest } from '../actions/library-path';
import { currentFileSelect } from '../actions/current-file';
import { libraryScannerStart } from '../actions/library-scanner';
import { viewChange } from '../actions/view';

function mapStateToProps(state, ownProps) {
  return {
    title: ownProps.title,
    fileList: state.library,
    libraryPath: state.libraryPath,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLibraryPath: () => dispatch(libraryPathLoadRequest()),
    selectCurrentFile: ((file) => {
      dispatch(currentFileSelect(file));
      dispatch(viewChange('EDITOR'));
    }),
    scanLibrary: () => dispatch(libraryScannerStart()),
  };
}

const LibraryFileList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList);

export default LibraryFileList;
