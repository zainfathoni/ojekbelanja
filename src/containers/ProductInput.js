import { connect } from 'react-redux';

import { setProductKeyword } from '../actions';
import { getProductKeyword } from '../reducers';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Produk",
  keyword: getProductKeyword(state),
  withButton: true,
});

const ProductInput = connect(
  mapStateToProps,
  { keywordSet: setProductKeyword },
)(FilterInput);

export default ProductInput;
