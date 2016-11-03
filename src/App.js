import React, { Component } from 'react';

import Navigation from './Navigation';
import TokoPicker from './TokoPicker';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="app-header">
          <h1>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</h1>
          <h3>Asisten Belanja Anda</h3>
        </div>
        <p className="app-intro">
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        <TokoPicker />
      </div>
    );
  }
}

export default App;
