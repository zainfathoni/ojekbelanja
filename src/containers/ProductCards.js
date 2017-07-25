import { connect } from "react-redux";
import { setKeyword } from "../actions";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.keyword
  };
};

const ProductCards = connect(
  mapStateToProps
)(FilterCards);

export default ProductCards;
