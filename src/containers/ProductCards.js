import { connect } from "react-redux";
import { incOrder, decOrder } from "../actions";
import {
  getProductKeyword,
  getQuantity,
  getStoreIsFetching,
  getStoreError
} from "../reducers";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getProductKeyword(state),
  items: Object.keys(ownProps.items)
    .map(key => {
      const p = ownProps.items[key];
      return {
        id: key,
        section: p.category,
        title: p.name,
        description: p.desc,
        image: require(`../css/images/${p.image}`),
        price: p.price,
        unit: p.unit,
        overlay: getQuantity(state, key),
        disabled: p.empty,
        ribbon: p.promo,
        tooltip: p.promo_desc
      };
    })
    .reduce(
      (res, p) => ({
        ...res,
        [p.id]: p
      }),
      {}
    ),
  isFetching: getStoreIsFetching(state),
  error: getStoreError(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: Object.keys(ownProps.items)
    .map(key => ({
      id: key,
      action: () => dispatch(incOrder(key))
    }))
    .reduce(
      (res, a) => ({
        ...res,
        [a.id]: a.action
      }),
      {}
    ),
  actionsReverse: Object.keys(ownProps.items)
    .map(key => ({
      id: key,
      action: () => dispatch(decOrder(key))
    }))
    .reduce(
      (res, a) => ({
        ...res,
        [a.id]: a.action
      }),
      {}
    )
});

const ProductCards = connect(mapStateToProps, mapDispatchToProps)(FilterCards);

export default ProductCards;
