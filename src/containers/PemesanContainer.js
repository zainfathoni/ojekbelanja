import { connect } from "react-redux";
import { userSet, userClear } from "../actions";
import Pemesan from "../pages/Pesan/Pemesan";

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  set(field, value) {
    dispatch(userSet(field, value));
  },
  clear() {
    dispatch(userClear());
  },
});

const PemesanContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pemesan);

export default PemesanContainer;
