import React from 'react';

import Button from '../../../components/Button';
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
          <span className="order-delivery-fee-label">
            + Ongkos Kirim
          </span>
          {` Rp ${deliveryFee.toLocaleString('id')}`}
        </div>
      </div>
      <div className="order-action-wrapper">
        <Button
          type="content"
          action={(e) => props.clear()}
          icon="times"
          text="Kosongkan"
          isSecondary
          />
        <Button
          type="content"
          action={(e) => props.checkout(tokoId)}
          icon="shopping-cart"
          text="Pesan"
          />
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
