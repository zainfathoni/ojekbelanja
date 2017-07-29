import { connect } from "react-redux";
import { orderClear } from "../actions";
import Order from "../components/Order";

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clear() {
    dispatch(orderClear());
  },
});

const FooterOrder = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);

export default FooterOrder;
