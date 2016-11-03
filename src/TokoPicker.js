import React, { Component } from 'react';

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
    console.log(this.state);
    return (
      <main className="input-group input-group-rounded">
        <input
          type="text"
          className="input-text"
          placeholder="Nama Toko"
          value={this.state.keyword}
          onChange={(e) => this.updateKeyword(e.target.value)}
          />
        <span className="input-group-btn">
          <a className="btn btn-primary btn-block">
            <i className="material-icons">search</i>
          </a>
        </span>
        <button onClick={(e) => this.goToToko('Jejen')}>
          {'Jejen'} →
        </button>
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
