import { connect } from 'react-redux';
import Router from '../components/Router';

function mapStateToProps(state) {
  return {
    view: state.view,
  };
}

function mapDispatchToProps() {
  return {};
}

const ViewRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export default ViewRouter;
