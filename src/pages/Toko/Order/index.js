import React from 'react';

import '../../pages.css';

export default function Order(props) {
  // Calculate Price
  const totalPrice =
    Object.keys(props.order)
      .reduce(
      (sum, key) =>
        sum + (props.products[key].price * props.products[key].step * props.order[key])
      ,
      0
      );

  return (
    <div>
      {`Total Pembayaran: Rp ${(totalPrice + props.deliveryCost).toLocaleString('id')}`}
    </div>
  )
}

Order.propTypes = {
  order: React.PropTypes.object.isRequired,
  products: React.PropTypes.object.isRequired,
  deliveryCost: React.PropTypes.number.isRequired
}
