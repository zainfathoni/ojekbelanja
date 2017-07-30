import { connect } from 'react-redux';

import { productsKeywordSet } from '../actions';
import { getProductKeyword } from '../reducers';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Produk",
  keyword: getProductKeyword(state),
  withButton: true,
});

const ProductInput = connect(
  mapStateToProps,
  { keywordSet: productsKeywordSet },
)(FilterInput);

export default ProductInput;
