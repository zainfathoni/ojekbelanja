import React, { Component } from 'react';
import { connect } from "react-redux";

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from '../../containers/Products';
import FooterOrder from '../../containers/FooterOrder';
import { orderClean } from '../../actions';
import { stores, products } from '../../models';
import '../pages.css';

class Toko extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    this.props.orderClean(products);
  }

  /*** Render ***/

  render() {
    const { storeId } = this.props.match.params;
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
            id={storeId}
            deliveryFee={toko.cost}
            />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

Toko = connect(
  mapStateToProps,
  { orderClean },
)(Toko);

export default Toko;
