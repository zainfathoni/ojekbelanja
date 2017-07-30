import { connect } from "react-redux";
import { keywordSet } from "../actions";
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Produk",
  keyword: state.keyword,
  withButton: true,
});

const ProductInput = connect(
  mapStateToProps,
  { keywordSet },
)(FilterInput);

export default ProductInput;
