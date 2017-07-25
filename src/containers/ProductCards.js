import { connect } from "react-redux";
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
