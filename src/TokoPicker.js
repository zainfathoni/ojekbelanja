import React, { Component } from 'react';

import './css/TokoPicker.css';

export default class TokoPicker extends Component {
  goToToko = (tokoId) => {
    console.log(`Going to ${tokoId}`);
    console.log(this.context);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  render() {
    return (
      <div className="input-group input-group-rounded">
        <input type="text" className="input-text" placeholder="Nama Toko" value="" />
        <span className="input-group-btn">
          <a className="btn btn-primary btn-block">
            <i className="material-icons">search</i>
          </a>
        </span>
        <button onClick={(e) => this.goToToko('Jejen')}>
          {'Jejen'} →
        </button>
      </div>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
