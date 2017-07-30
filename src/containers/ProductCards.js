import { connect } from 'react-redux';
import { getProductKeyword } from '../reducers';
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getProductKeyword(state),
  fields: {
    title: 'name',
    description: 'desc',
    section: 'category',
  },
});

const ProductCards = connect(
  mapStateToProps,
)(FilterCards);

export default ProductCards;
