import { connect } from 'react-redux';
import FileList from '../components/FileList/FileList';
import { libraryPathLoadRequest } from '../actions/library-path';

function mapStateToProps(state) {
  return {
    fileList: state.library || [],
    showSelectButton: !state.libraryPath,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLibraryPath: () => dispatch(libraryPathLoadRequest()),
  };
}

const LibraryFileList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList);

export default LibraryFileList;
