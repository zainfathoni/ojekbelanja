import { connect } from "react-redux";
import { keywordSet } from "../actions";
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: "Cari Nama atau Area Layanan",
    keyword: state.keyword,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (id) => {
      dispatch(keywordSet(id));
    }
  };
};

const TokoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterInput);

export default TokoInput;
