import { connect } from "react-redux";
import { orderClear } from "../actions";
import Order from "../components/Order";

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

const FooterOrder = connect(
  mapStateToProps,
  {
    clear: orderClear,
  },
)(Order);

export default FooterOrder;
