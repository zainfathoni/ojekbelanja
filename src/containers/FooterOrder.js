import { connect } from "react-redux";
import * as actions from "../actions";
import { getOrderCount, getTotal } from "../reducers";
import Order from "../components/Order";

const mapStateToProps = (state, ownProps) => ({
  orderCount: getOrderCount(state),
  total: getTotal(state)
});

const FooterOrder = connect(mapStateToProps, actions)(Order);

export default FooterOrder;
