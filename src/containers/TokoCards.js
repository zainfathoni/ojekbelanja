import { connect } from 'react-redux';

import { getStoreKeyword } from '../reducers';
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getStoreKeyword(state),
  fields: {
    title: 'name',
    description: 'area',
  },
});

const TokoCards = connect(
  mapStateToProps,
)(FilterCards);

export default TokoCards;
