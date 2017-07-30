import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from "../components/ListItem";

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.id]
});

const ProductListItem = connect(
  mapStateToProps,
  actions,
)(ListItem);

export default ProductListItem;
