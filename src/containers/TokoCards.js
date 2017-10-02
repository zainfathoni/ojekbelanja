import { connect } from "react-redux";

import {
  getStoreKeyword,
  getStoreIsFetching,
  getStoreError
} from "../reducers";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getStoreKeyword(state),
  sections: {},
  items: Object.keys(ownProps.items)
    .map(key => {
      const t = ownProps.items[key];
      return {
        id: key,
        title: t.name,
        description: t.area,
        image: require(`../css/images/${t.image}`),
        price: t.cost,
        unit: "pengiriman"
      };
    })
    .reduce(
      (res, t) => ({
        ...res,
        [t.id]: t
      }),
      {}
    ),
  isFetching: getStoreIsFetching(state),
  error: getStoreError(state)
});

const TokoCards = connect(mapStateToProps)(FilterCards);

export default TokoCards;
