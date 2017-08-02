import { connect } from 'react-redux';

import { setStoreKeyword } from '../actions';
import { getStoreKeyword } from '../reducers';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Nama atau Area Layanan",
  keyword: getStoreKeyword(state),
});

const TokoInput = connect(
  mapStateToProps,
  { setKeyword: setStoreKeyword },
)(FilterInput);

export default TokoInput;
