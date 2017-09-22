import React, { Component } from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { getStore, getProducts } from "../reducers";
import Page from "../components/Page";
import Header from "../components/Header";
import Products from "../containers/Products";
import FooterOrder from "../containers/FooterOrder";

class Toko extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    this.props.fetchStore(this.props.id);
    this.props.fetchProducts(this.props.id);
  }

  /*** Render ***/

  render() {
    const { id, toko, products } = this.props;
    // Render Loading Bars
    if (!toko) {
      return (
        <Page>
          <div>
            <p>
              <strong>Ojek Belanja</strong> sedang memuat data Toko & Produk
            </p>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            <span className="sr-only">Loading...</span>
          </div>
        </Page>
      );
    }

    return (
      <Page
        header={<Header heading={"Toko " + toko.name} />}
        footer={
          <FooterOrder products={products} id={id} deliveryFee={toko.cost} />
        }
      >
        <div>
          <p>
            Selamat datang di toko <code>{id}</code>.
          </p>
          <Products />
          <div className="l-footer-buffer" />
        </div>
      </Page>
    );
  }
}

Toko.propTypes = {
  id: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired
  }),
  products: T.objectOf(
    T.shape({
      name: T.string.isRequired,
      desc: T.string.isRequired,
      image: T.string.isRequired,
      unit: T.string.isRequired,
      step: T.number.isRequired,
      price: T.number.isRequired,
      category: T.string.isRequired
    })
  ),
  fetchStore: T.func.isRequired,
  fetchProducts: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.storeId;
  return {
    id,
    toko: getStore(state, id),
    products: getProducts(state)
  };
};

Toko = connect(mapStateToProps, actions)(Toko);

export default Toko;
