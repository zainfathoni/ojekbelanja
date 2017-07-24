import { connect } from "react-redux";
import { orderPlus, orderMinus } from "../actions";
import Card from "../components/FilterCards/Card";

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.order[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (id) => {
      dispatch(orderPlus(id));
    },
    actionReverse: (id) => {
      dispatch(orderMinus(id));
    }
  };
};

const ProductCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default ProductCard;
