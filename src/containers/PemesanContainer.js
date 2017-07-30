import { connect } from 'react-redux';
import * as actions from '../actions';
import Pemesan from "../pages/Pesan/Pemesan";

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const PemesanContainer = connect(
  mapStateToProps,
  actions,
)(Pemesan);

export default PemesanContainer;
