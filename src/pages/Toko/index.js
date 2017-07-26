import React, { Component } from 'react';
import { connect } from "react-redux";
import { orderLoad, setCost } from "../../actions";

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from '../../containers/Products';
import FooterOrder from '../../containers/FooterOrder';
import { fetch, save } from '../../services/form';
import { stores, products } from '../../models';
import '../pages.css';

class Toko extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const order = fetch(`order-${this.props.params.storeId}`);

    let cleanedOrder;
    if (order) {
      // Clean empty products from order
      cleanedOrder =
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
    }
    
    this.props.updateOrder(cleanedOrder);
    this.props.updateCost();
  }

  componentDidUpdate(prevProps, prevState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.params.storeId}`, this.props.order);
  }

  /*** Methods ***/

  checkout = () => {
    const { storeId } = this.props.params;
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
          <Products />
          <div className="l-footer-buffer">
          </div>
        </main>
        <footer className="l-wrapper-footer">
          <FooterOrder
            products={products}
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

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateOrder: (order) => {
      dispatch(orderLoad(order));
    },
    updateCost: () => {
      dispatch(setCost(stores[ownProps.params.storeId].cost));
    }
  };
};

Toko = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toko);

export default Toko;
