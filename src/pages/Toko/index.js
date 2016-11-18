import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from './Products';
import Order from './Order';
import { tokos, products } from '../../models';
import '../pages.css';

export default class Toko extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      deliveryCost: tokos[this.props.params.tokoId].cost
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.tokoId}`);

    const order = JSON.parse(localStorageRef);

    // Clean empty products 
    const cleanedOrder =
      Object.keys(order)
        .filter(key =>
          !products[key].empty
        )
        .reduce(
        (res, key) =>
          Object.assign(
            {},
            res,
            { [key]: order[key] }),
        {}
        );

    if (localStorageRef) {
      this.setState({
        order: cleanedOrder
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    localStorage.setItem(
      `order-${this.props.params.tokoId}`,
      JSON.stringify(nextState.order));
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

  checkout = (tokoId) => {
    console.log(`Checkout ${tokoId} Order`);
    this.context.router.transitionTo(`/pesan/${tokoId}`);
  }

  /*** Render ***/

  render() {
    const { tokoId } = this.props.params;
    const toko = tokos[tokoId];

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + toko.name} />
        <main className="l-main">
          <p>
            Selamat datang di toko <code>{tokoId}</code>.
          </p>
          <Products
            toko={toko}
            order={this.state.order}
            action={this.plus}
            actionReverse={this.minus}
            />
          <div className="l-footer-buffer">
          </div>
        </main>
        <footer className="l-wrapper-footer">
          <Order
            tokoId={this.props.params.tokoId}
            order={this.state.order}
            products={products}
            deliveryFee={this.state.deliveryCost}
            clear={this.clear}
            checkout={this.checkout}
            />
        </footer>
      </div>
    );
  }
}

Toko.contextTypes = {
  router: React.PropTypes.object
}
