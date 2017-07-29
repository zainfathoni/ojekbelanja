import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";

import { keywordClear } from "../actions";
import TokoInput from './TokoInput';
import TokoCards from './TokoCards';
import base from '../services/base';
import '../pages/pages.css';

class Tokos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: {},
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch stores from Firebase
    base
      .fetch(`/stores`, {
        context: this
      })
      .then(data => {
        this.setState({
          stores: data
        })
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
          items={this.state.stores}
        />
      </main>
    );
  }
}

Tokos.propTypes = {
  clear: T.func.isRequired,
}

Tokos = connect(
  null,
  {
    clear: keywordClear,
  },
)(Tokos);

export default Tokos;
