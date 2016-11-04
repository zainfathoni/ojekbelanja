import React, { Component } from 'react';

import TokoList from './TokoList';
import { tokos } from './models';
import './css/TokoPicker.css';

export default class TokoPicker extends Component {
  constructor() {
    super();

    this.state = {
      tokos,
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  goToToko = (tokoId) => {
    console.log(`Going to ${tokoId}`);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  /*** Render ***/

  render() {
    return (
      <main>
        <div className="l-filter-input">
          <input
            type="text"
            className="filter-input filter-input-txt"
            placeholder="Nama Toko"
            value={this.state.keyword}
            onChange={(e) => this.updateKeyword(e.target.value)}
            />
          <button className="filter-input filter-input-btn">
            <i className="material-icons">search</i>
          </button>
        </div>
        <TokoList
          {...this.state}
          goToToko={this.goToToko}
        />
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
