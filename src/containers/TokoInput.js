import { connect } from 'react-redux';

import { storesKeywordSet } from '../actions';
import { getStoreKeyword } from '../reducers';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Nama atau Area Layanan",
  keyword: getStoreKeyword(state),
});

const TokoInput = connect(
  mapStateToProps,
  { keywordSet: storesKeywordSet },
)(FilterInput);

export default TokoInput;
