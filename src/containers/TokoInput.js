import { connect } from 'react-redux';
import * as actions from '../actions';
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Nama atau Area Layanan",
  keyword: state.keyword,
});

const TokoInput = connect(
  mapStateToProps,
  actions,
)(FilterInput);

export default TokoInput;
