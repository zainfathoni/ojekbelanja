import { connect } from "react-redux";
import { incOrder, decOrder } from "../actions";
import {
  getProductKeyword,
  getFilteredProductCards,
  getStoreIsFetching,
  getStoreError
} from "../reducers";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getProductKeyword(state),
  items: getFilteredProductCards(state),
  isFetching: getStoreIsFetching(state),
  error: getStoreError(state)
});

const ProductCards = connect(mapStateToProps, {
  action: incOrder,
  actionReverse: decOrder
})(FilterCards);

export default ProductCards;
