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
    const newOrder = this.state.order;

    if (newOrder[productId]) {
      newOrder[productId]++;
    } else {
      newOrder[productId] = 1;
    }

    this.setState({
      order: newOrder
    })
  }

  minus = (productId) => {
    const newOrder = this.state.order;

    if (newOrder[productId] > 1) {
      newOrder[productId]--;
    } else {
      delete newOrder[productId];
    }

    this.setState({
      order: newOrder
    })
  }

  clear = () => {
    this.setState({
      order: {}
    })
  }

  checkout = () => {
    console.log(`Checking Out:`);
    console.log(this.state.order);
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
            order={this.state.order}
            action={this.plus}
            actionReverse={this.minus}
            />
          <div className="footer-buffer">

          </div>
        </main>
        <footer className="l-wrapper-footer">
          <Order
            order={this.state.order}
            products={products}
            deliveryCost={this.state.deliveryCost}
            clear={this.clear}
            checkout={this.checkout}
            />
        </footer>
      </div>
    );
  }
}
