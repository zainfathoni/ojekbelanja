import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getStores } from '../reducers';
import TokoInput from './TokoInput';
import TokoCards from './TokoCards';
import '../pages/pages.css';

class Tokos extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    this.props.storesFetch();
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
}

const mapStateToProps = (state) => ({
  stores: getStores(state),
});

Tokos = connect(
  mapStateToProps,
  actions,
)(Tokos);

export default Tokos;
