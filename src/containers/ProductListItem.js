import { connect } from "react-redux";
import { orderPlus, orderMinus } from "../actions";
import ListItem from "../components/ListItem";

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

const ProductListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

export default ProductListItem;
