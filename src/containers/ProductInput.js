import { connect } from 'react-redux';
import * as actions from '../actions';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Produk",
  keyword: state.keyword,
  withButton: true,
});

const ProductInput = connect(
  mapStateToProps,
  actions,
)(FilterInput);

export default ProductInput;
