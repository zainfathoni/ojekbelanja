import { connect } from 'react-redux';

import * as actions from '../actions';
import { getOrderCount, getQuantity } from '../reducers';
import ListItem from "../components/ListItem";

const mapStateToProps = (state, ownProps) => ({
  count: getOrderCount(state, ownProps.id),
  quantity: getQuantity(state, ownProps.id),
});

const ProductListItem = connect(
  mapStateToProps,
  actions,
)(ListItem);

export default ProductListItem;
