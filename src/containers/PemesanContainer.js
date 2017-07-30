import { connect } from "react-redux";
import { userSet, userClear } from "../actions";
import Pemesan from "../pages/Pesan/Pemesan";

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const PemesanContainer = connect(
  mapStateToProps,
  { userSet, userClear },
)(Pemesan);

export default PemesanContainer;
