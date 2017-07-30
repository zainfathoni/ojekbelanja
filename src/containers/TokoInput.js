import { connect } from "react-redux";
import { keywordSet } from "../actions";
import FilterInput from "../components/FilterInput";

const mapStateToProps = (state, ownProps) => ({
  placeholder: "Cari Nama atau Area Layanan",
  keyword: state.keyword,
});

const TokoInput = connect(
  mapStateToProps,
  { keywordSet },
)(FilterInput);

export default TokoInput;
