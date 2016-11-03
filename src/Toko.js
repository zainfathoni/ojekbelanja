import React, { Component } from 'react';

import Navigation from './Navigation';
import './css/App.css';

class Toko extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="app-header">
          <h2>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</h2>
        </div>
        <p className="app-intro">
          Selamat datang di toko <code>{this.props.params.tokoId}</code>.
        </p>
      </div>
    );
  }
}

export default Toko;
