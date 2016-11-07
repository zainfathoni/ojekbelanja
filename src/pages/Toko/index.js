import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import FilterInput from'../../components/FilterInput';
import FilterCards from '../../components/FilterCards';
import { tokos, products } from '../../models';
import '../pages.css';
import './Toko.css';

export default class Toko extends Component {
  constructor() {
    super();

    this.state = {
      products,
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  buy = (productId) => {
    console.log(`Buying ${productId}`);
  }

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
          <FilterInput
            placeholder="Cari Produk"
            keyword={this.state.keyword}
            action={this.updateKeyword}
            withButton
            />
          <FilterCards
            keyword={this.state.keyword}
            items={this.state.products}
            titleField="name"
            descriptionField="desc"
            imageField="image"
            action={this.buy}
            />
          {/* TODO: Add Order State */}
        </main>
      </div>
    );
  }
}
