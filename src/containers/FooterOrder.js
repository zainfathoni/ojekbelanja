import { connect } from 'react-redux';
import * as actions from '../actions';
// import { getProducts } from '../reducers';
import Order from "../components/Order";

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
  // products: getProducts(state),
});

const FooterOrder = connect(
  mapStateToProps,
  actions,
)(Order);

export default FooterOrder;
