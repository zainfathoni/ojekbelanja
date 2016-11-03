import React, { Component } from 'react';

import Navigation from './Navigation';
import './css/App.css';

class App extends Component {
  goToToko = (tokoId) => {
    console.log(`Going to ${tokoId}`);
    console.log(this.context);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="app-header">
          <h1>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</h1>
          <h3>Asisten Belanja Anda</h3>
        </div>
        <p className="app-intro">
          Silakan pilih toko.
        </p>
        <button onClick={(e) => this.goToToko('Jejen')}>
          {'Jejen'} →
        </button>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
