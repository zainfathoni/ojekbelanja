import { connect } from 'react-redux';
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: state.keyword,
  fields: {
    title: 'name',
    description: 'area',
  },
});

const TokoCards = connect(
  mapStateToProps,
)(FilterCards);

export default TokoCards;
