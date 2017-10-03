import React from "react";
import { PropTypes as T } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getStore, getProducts, getOrder, getTotal } from "../../../reducers";
import Form from "../../../components/Form";
import Button from "../../../components/Button";
import ProductListItem from "../../../containers/ProductListItem";
import "./Pesanan.css";

let Pesanan = ({ id, toko, order, products, total }) => (
  <Form
    name={name}
    title="Pesanan Anda"
    icon={<i className="fa fa-lg fa-shopping-cart" aria-hidden="true" />}
    header={
      <Link to={`/toko/${id}`}>
        <Button
          className="Pesanan-heading-action"
          display="content"
          icon="arrow-left"
          text="Kembali"
          isSecondary
          isSmall
        />
      </Link>
    }
    footer={
      <div className="Pesanan-footer">
        <div className="Pesanan-footer-delivery-fee">
          <div className="Pesanan-footer-delivery-fee-label">Ongkos Kirim</div>
          <div className="Pesanan-footer-delivery-fee-amount">
            {`Rp ${toko.cost.toLocaleString("id")}`}
          </div>
        </div>
        <hr />
        <div className="Pesanan-footer-total-price">
          <div className="Pesanan-footer-total-price-label">Harga Total</div>
          <div className="Pesanan-footer-total-price-amount">
            {`Rp ${(toko.cost + total).toLocaleString("id")}`}
          </div>
        </div>
      </div>
    }
  >
    {Object.keys(order).map(key => {
      const item = products[key];
      return <ProductListItem key={key} id={key} item={item} />;
    })}
  </Form>
);

Pesanan.propTypes = {
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
  order: T.object.isRequired,
  total: T.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    toko: getStore(state, ownProps.id),
    products: getProducts(state),
    order: getOrder(state),
    total: getTotal(state)
  };
};

Pesanan = connect(mapStateToProps)(Pesanan);

export default Pesanan;
