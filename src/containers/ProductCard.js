import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";
import { orderPlus, orderMinus } from "../actions";
import { quantify } from '../services/product';
import Card from "../components/FilterCards/Card";

const mapStateToProps = (state, ownProps) => {
  const { id, product: p } = ownProps;
  return {
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

ProductCard.propTypes = {
  id: T.string.isRequired,
  product: T.shape({
    name: T.string.isRequired,
    desc: T.string.isRequired,
    image: T.string.isRequired,
    unit: T.string,
    step: T.number,
    price: T.number,
    empty: T.bool,
    promo: T.string,
    promo_desc: T.string,
  }).isRequired,
}

export default ProductCard;
