import { connect } from 'react-redux';
import FileList from '../components/FileList/FileList';

function mapStateToProps(state) {
  return {
    fileList: state.library || [],
  };
}

function mapDispatchToProps() {
  return {};
}

const LibraryFileList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList);

export default LibraryFileList;
