import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";

import { storesReceive, keywordClear } from "../actions";
import TokoInput from './TokoInput';
import TokoCards from './TokoCards';
import base from '../services/base';
import '../pages/pages.css';

class Tokos extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch stores from Firebase
    base
      .fetch(`/stores`, {
        context: this
      })
      .then(stores => {
        this.props.storesReceive(stores);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.props.clear();
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
    clear: T.func.isRequired,
}

const mapStateToProps = (state) => ({
  stores: state.stores,
});

Tokos = connect(
  mapStateToProps,
  {
    clear: keywordClear,
    storesReceive,
  },
)(Tokos);

export default Tokos;
