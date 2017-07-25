import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from './Products';
import FooterOrder from '../../containers/FooterOrder';
import { fetch, save, set } from '../../services/form';
import { stores, products } from '../../models';
import '../pages.css';

export default class Toko extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      deliveryCost: stores[this.props.params.storeId].cost
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const order = fetch(`order-${this.props.params.storeId}`);

    if (order) {
      // Clean empty products from order
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

      if (cleanedOrder) {
        set(this, 'order', cleanedOrder);
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.params.storeId}`, nextState.order);
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

  checkout = (storeId) => {
    console.log(`Checkout ${storeId} Order`);
    this.context.router.transitionTo(`/pesan/${storeId}`);
  }

  /*** Render ***/

  render() {
    const { storeId } = this.props.params;
    const toko = stores[storeId];

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + toko.name} />
        <main className="l-main">
          <p>
            Selamat datang di toko <code>{storeId}</code>.
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
          <FooterOrder
            storeId={this.props.params.storeId}
            order={this.state.order}
            products={products}
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
