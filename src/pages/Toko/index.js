import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from './Products';
import { tokos } from '../../models';
import '../pages.css';
import './Toko.css';

export default class Toko extends Component {
  /*** Render ***/
  
  render() {
    const { tokoId } = this.props.params;
    const toko = tokos[tokoId];
    
    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header heading={toko.name} />
        <main className="l-tokopicker">
          <p>
            Selamat datang di toko <code>{tokoId}</code>.
          </p>
          <Products
            toko={toko}
            />
          {/* TODO: Add Order State */}
        </main>
      </div>
    );
  }
}
