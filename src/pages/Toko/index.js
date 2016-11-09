import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from './Products';
import Order from './Order';
import { tokos, products } from '../../models';
import '../pages.css';

export default class Toko extends Component {
  constructor() {
    super();

    this.state = {
      order: {},
      totalPrice: 0,
      deliveryCost: 0
    }
  }

  /*** Lifecycle ***/
  componentWillMount() {
    this.setState({
      deliveryCost: tokos[this.props.params.tokoId].cost
    })
  }

  /*** Methods ***/

  plus = (productId) => {
    console.log(`Adding ${products[productId].step} ${products[productId].unit} of ${products[productId].name} to Order`);
  }

  minus = (productId) => {
    console.log(`Removing ${products[productId].step} ${products[productId].unit} of ${products[productId].name} from Order`);
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
        <main className="l-wrapper-filter">
          <p>
            Selamat datang di toko <code>{tokoId}</code>.
          </p>
          <Products
            toko={toko}
            action={this.plus}
            actionReverse={this.minus}
            />
        </main>
        <footer className="l-wrapper-order">
          <Order
            totalPrice={this.state.totalPrice}
            deliveryCost={this.state.deliveryCost}
            />
        </footer>
      </div>
    );
  }
}
