import { connect } from "react-redux";
import { orderSet, orderRemove } from "../actions";
import ListItem from "../components/ListItem";

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.order[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    set: (id, count) => {
      dispatch(orderSet(id, count));
    },
    remove: (id) => {
      dispatch(orderRemove(id));
    }
  };
};

const ProductListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

export default ProductListItem;
