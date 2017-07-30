import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import TokoInput from './TokoInput';
import TokoCards from './TokoCards';
import '../pages/pages.css';

class Tokos extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch stores from Firebase
    this.props.storesFetch();
  }

  componentWillUnmount() {
    this.props.keywordClear();
  }

  /*** Render ***/

  render() {
    return (
      <main className="l-main">
        <TokoInput />
        <TokoCards
          items={this.props.stores}
        />
      </main>
    );
  }
}

Tokos.propTypes = {
    stores: T.objectOf(
      T.shape({
        name: T.string.isRequired,
        area: T.string.isRequired,
        image: T.string.isRequired,
        cost: T.number.isRequired,
      }).isRequired
    ).isRequired,
    storesFetch: T.func.isRequired,
    keywordClear: T.func.isRequired,
}

const mapStateToProps = (state) => ({
  stores: state.stores,
});

Tokos = connect(
  mapStateToProps,
  actions,
)(Tokos);

export default Tokos;
