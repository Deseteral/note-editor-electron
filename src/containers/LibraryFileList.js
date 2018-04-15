import { connect } from 'react-redux';
import FileList from '../components/FileList/FileList';
import { libraryPathLoadRequest } from '../actions/library-path';

function mapStateToProps(state, ownProps) {
  return {
    title: ownProps.title,
    fileList: state.library,
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
