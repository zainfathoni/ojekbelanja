import { connect } from "react-redux";
import { keywordSet } from "../actions";
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: "Cari Produk",
    keyword: state.keyword,
    withButton: true,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (id) => {
      dispatch(keywordSet(id));
    }
  };
};

const ProductInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterInput);

export default ProductInput;
