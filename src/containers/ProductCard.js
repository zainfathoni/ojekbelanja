import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import { incOrder, decOrder } from "../actions";
import { getProductKeyword, getQuantity } from "../reducers";
import Card from "../components/FilterCards/Card";

const mapStateToProps = (state, { id, product: p }) => ({
  keyword: getProductKeyword(state),
  title: p.name,
  description: p.desc,
  image: require(`../css/images/${p.image}`),
  overlay: getQuantity(state, id),
  unit: p.unit,
  price: p.price,
  disabled: p.empty,
  ribbon: p.promo,
  tooltip: p.promo_desc
});

const mapDispatchToProps = (dispatch, { id }) => ({
  action: () => {
    dispatch(incOrder(id));
  },
  actionReverse: () => {
    dispatch(decOrder(id));
  }
});

const ProductCard = connect(mapStateToProps, mapDispatchToProps)(Card);

ProductCard.propTypes = {
  id: T.string.isRequired,
  product: T.shape({
    name: T.string.isRequired,
    desc: T.string.isRequired,
    image: T.string.isRequired,
    unit: T.string.isRequired,
    step: T.number.isRequired,
    price: T.number.isRequired,
    empty: T.bool,
    promo: T.string,
    promo_desc: T.string
  }).isRequired
};

export default ProductCard;
