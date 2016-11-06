import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import '../pages.css';

export default class Toko extends Component {
  render() {
    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header />
        <p>
          Selamat datang di toko <code>{this.props.params.tokoId}</code>.
        </p>
      </div>
    );
  }
}
