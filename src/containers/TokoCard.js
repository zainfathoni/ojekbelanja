import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import { getStoreKeyword } from "../reducers";
import Card from "../components/FilterCards/Card";

const mapStateToProps = (state, { toko: t }) => ({
  keyword: getStoreKeyword(state),
  title: t.name,
  description: t.area,
  image: require(`../css/images/${t.image}`),
  unit: "pengiriman",
  price: t.cost
});

const TokoCard = connect(mapStateToProps)(Card);

TokoCard.propTypes = {
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired
  }).isRequired
};

export default TokoCard;
