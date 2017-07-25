import { connect } from "react-redux";
import { setKeyword } from "../actions";
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.keyword
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (id) => {
      dispatch(setKeyword(id));
    }
  };
};

const ProductInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterInput);

export default ProductInput;
