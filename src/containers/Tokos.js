import React, { Component } from 'react';
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
    this.props.clearKeyword();
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

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearKeyword: () => {
      dispatch(keywordClear());
    }
  };
};

Tokos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tokos);

export default Tokos;
