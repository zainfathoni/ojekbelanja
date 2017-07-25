import { connect } from "react-redux";
import { orderClear } from "../actions";
import Order from "../pages/Toko/Order";

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    deliveryFee: state.cost
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clear: () => {
      dispatch(orderClear());
    }
  };
};

const FooterOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);

export default FooterOrder;
