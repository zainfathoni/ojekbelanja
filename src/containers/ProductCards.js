import { connect } from "react-redux";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.keyword,
    fields: {
      title: 'name',
      description: 'desc',
      section: 'category',
    },
  };
};

const ProductCards = connect(
  mapStateToProps
)(FilterCards);

export default ProductCards;
