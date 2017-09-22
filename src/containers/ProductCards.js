import { connect } from "react-redux";
import {
  getProductKeyword,
  getStoreIsFetching,
  getStoreError
} from "../reducers";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getProductKeyword(state),
  fields: {
    title: "name",
    description: "desc",
    section: "category"
  },
  isFetching: getStoreIsFetching(state),
  error: getStoreError(state)
});

const ProductCards = connect(mapStateToProps)(FilterCards);

export default ProductCards;
