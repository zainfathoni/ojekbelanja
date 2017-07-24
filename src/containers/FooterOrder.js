import { connect } from "react-redux";
import Order from "../pages/Toko/Order";

const mapStateToProps = (state, ownProps) => {
  return {
    deliveryFee: state.cost
  };
};

const FooterOrder = connect(
  mapStateToProps
)(Order);

export default FooterOrder;
