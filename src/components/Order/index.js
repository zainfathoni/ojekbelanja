import React from "react";
import { PropTypes as T } from "prop-types";

import Button from "../Button";
import "./Order.css";

export default function Order(props) {
  const { id, orderCount, total, deliveryFee, clearOrder } = props;

  return (
    <div className="l-Order">
      <div className="Order-price-wrapper">
        <div className="Order-product-count" title="Banyaknya Jenis Produk">
          {orderCount}
        </div>
        <div className="Order-price">{`Rp ${total.toLocaleString("id")}`}</div>
        <div className="Order-delivery-fee">
          <span className="Order-delivery-fee-label">+ Ongkos Kirim</span>
          {` Rp ${deliveryFee.toLocaleString("id")}`}
        </div>
      </div>
      <div className="Order-action-wrapper">
        <Button
          display="content"
          action={e => clearOrder()}
          icon="times"
          text="Kosongkan"
          isSecondary
          disabled={!orderCount}
        />
        <Button
          display="content"
          link={`/pesan/${id}`}
          icon="shopping-cart"
          text="Pesan"
          disabled={!orderCount}
        />
        {/**/}
      </div>
    </div>
  );
}

Order.propTypes = {
  orderCount: T.number.isRequired,
  total: T.number.isRequired,
  deliveryFee: T.number.isRequired,
  clearOrder: T.func.isRequired
};
