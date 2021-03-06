import { connect } from "react-redux";

import * as actions from "../actions";
import { getOrderQty, getQuantity, getSubtotal } from "../reducers";
import ListItem from "../components/ListItem";

const mapStateToProps = (state, ownProps) => ({
  count: getOrderQty(state, ownProps.id),
  quantity: getQuantity(state, ownProps.id),
  subtotal: getSubtotal(state, ownProps.id)
});

const ProductListItem = connect(mapStateToProps, actions)(ListItem);

export default ProductListItem;
