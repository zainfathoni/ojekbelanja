import React, { Component } from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { getStores } from "../reducers";
import TokoInput from "./TokoInput";
import TokoCards from "./TokoCards";

class Tokos extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    this.props.fetchStores();
  }

  /*** Render ***/

  render() {
    return (
      <div>
        <TokoInput />
        <TokoCards items={this.props.stores} />
      </div>
    );
  }
}

Tokos.propTypes = {
  stores: T.objectOf(
    T.shape({
      name: T.string.isRequired,
      area: T.string.isRequired,
      image: T.string.isRequired,
      cost: T.number.isRequired
    }).isRequired
  ).isRequired,
  fetchStores: T.func.isRequired
};

const mapStateToProps = state => ({
  stores: getStores(state)
});

Tokos = connect(mapStateToProps, actions)(Tokos);

export default Tokos;
