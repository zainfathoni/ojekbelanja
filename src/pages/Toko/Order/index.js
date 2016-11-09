import React from 'react';

import '../../pages.css';
import './Order.css';

export default function Order(props) {
  const {
    tokoId,
    order,
    products,
    deliveryFee
  } = props;

  // Calculate Price
  const totalPrice =
    Object.keys(order)
      .reduce(
      (sum, key) =>
        sum + (products[key].price * products[key].step * order[key])
      ,
      0
      );

  return (
    <div className="l-order">
      <div className="order-price-wrapper">
        <div className="order-product-count" title="Banyaknya Jenis Produk">
          {Object.keys(order).length}
        </div>
        <div className="order-price">
          {`Rp ${totalPrice.toLocaleString('id')}`}
        </div>
        <div className="order-delivery-fee">
          {`Ongkos Kirim Rp ${deliveryFee.toLocaleString('id')}`}
        </div>
      </div>
      <div className="order-action-wrapper">
        <button
          className="order-action order-action-clear"
          onClick={(e) => props.clear()}>
          Kosongkan
          <i className="material-icons">remove_shopping_cart</i>
        </button>
        <button
          className="order-action order-action-checkout"
          onClick={(e) => props.checkout(tokoId)}>
          Pesan
          <i className="material-icons">shopping_cart</i>
        </button>
      </div>
    </div>
  )
}

Order.propTypes = {
  tokoId: React.PropTypes.string.isRequired,
  order: React.PropTypes.object.isRequired,
  products: React.PropTypes.object.isRequired,
  deliveryFee: React.PropTypes.number.isRequired,
  clear: React.PropTypes.func.isRequired,
  checkout: React.PropTypes.func.isRequired
}
