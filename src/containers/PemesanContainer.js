import { connect } from "react-redux";
import { userSet, userClear } from "../actions";
import Pemesan from "../pages/Pesan/Pemesan";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    set: (field, value) => {
      dispatch(userSet(field, value));
    },
    clear: () => {
      dispatch(userClear());
    }
  };
};

const PemesanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pemesan);

export default PemesanContainer;
