import { connect } from 'react-redux';
import Router from '../components/Router';

function mapStateToProps(state) {
  return {
    view: state.view,
  };
}

const ViewRouter = connect(mapStateToProps)(Router);

export default ViewRouter;
