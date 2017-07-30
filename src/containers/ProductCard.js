import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import { orderPlus, orderMinus } from '../actions';
import { quantify } from '../services/product';
import Card from "../components/FilterCards/Card";

const mapStateToProps = (state, { id, product: p }) => ({
  keyword: state.keyword,
  title: p.name,
  description: p.desc,
  image: require(`../css/images/${p.image}`),
  overlay: quantify(state.order[id], p.step, p.unit),
  unit: p.unit,
  price: p.price,
  disabled: p.empty,
  ribbon: p.promo,
  tooltip: p.promo_desc,
});

const ProductCard = connect(
  mapStateToProps,
  {
    action: orderPlus,
    actionReverse: orderMinus,
  },
)(Card);

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
    promo_desc: T.string,
  }).isRequired,
};

export default ProductCard;
