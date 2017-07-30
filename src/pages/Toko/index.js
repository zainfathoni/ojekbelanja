import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Products from '../../containers/Products';
import FooterOrder from '../../containers/FooterOrder';
import { products } from '../../models';
import '../pages.css';

class Toko extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    this.props.storeFetch(this.props.id);
    this.props.orderClean(products);
  }

  /*** Render ***/

  render() {
    const { id, toko } = this.props;
    // Render Loading Bars
    if (!toko) {
      return (
        <div className="l-fullwidth">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    
    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + toko.name} />
        <main className="l-main">
          <p>
            Selamat datang di toko <code>{id}</code>.
          </p>
          <Products />
          <div className="l-footer-buffer">
          </div>
        </main>
        <footer className="l-wrapper-footer">
          <FooterOrder
            products={products}
            id={id}
            deliveryFee={toko.cost}
            />
        </footer>
      </div>
    );
  }
}

Toko.propTypes = {
  id: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired,
  }),
  storeFetch: T.func.isRequired,
  orderClean: T.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.storeId,
  toko: state.stores[ownProps.match.params.storeId],
});

Toko = connect(
  mapStateToProps,
  actions,
)(Toko);

export default Toko;
